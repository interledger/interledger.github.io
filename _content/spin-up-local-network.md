## Overview

Many Interledger users may hold accounts with custodial wallets. However, some network participants may need to run their own node software, such as wallet operators, service providers that route payments, or regular users who choose to host their own nodes.

There are three primary implementations to operate an Interledger connector:

- [Java Connector](https://github.com/interledger4j/ilpv4-connector) &mdash; _Actively maintained by Xpring and recommended for new production deployments._
- [Interledger.rs (Rust)](https://github.com/interledger-rs/interledger-rs) &mdash; _Not actively developed, but recommended to get started for its ease of use and featureset._
- [`ilp-connector` (JavaScript)](https://github.com/interledgerjs/ilp-connector) &mdash; _Battle-tested in production._

This tutorial demonstrates how to:

1. Spin up a local test network with three Interledger.rs nodes
2. Send a cross-currency payment between them
3. Settle the payment using a local Ethereum testnet and the XRP Ledger testnet

Note: there are _many_ considerations to deploy an Interledger node into production, and this tutorial merely scratches the surface by running nodes in a safe, local environment without real money.

Intermediate knowledge of the command line and interacting with APIs is recommended for this tutorial.

_Estimated time: 10 minutes_

## 1. Set up the environment

This tutorial uses Docker, which is a platform to run networked applications within containers. If you don't already have Docker installed, [install the Docker Engine or Docker Desktop](https://docs.docker.com/install/).

The services in this example use the following Docker images:

- `interledgerrs/ilp-node` &mdash; Interledger.rs node
- `interledgerrs/ilp-cli` &mdash; CLI for interacting with Interledger.rs nodes
- `interledgerrs/ilp-settlement-ethereum` &mdash; Ethereum settlement engine
- `trufflesuite/ganache-cli` &mdash; Local Ethereum testnet
- `interledgerjs/settlement-xrp` &mdash; XRP settlement engine
- `redis` &mdash; Database for the node and settlement engines

Run these commands to pull the Docker images:

```bash
docker pull interledgerrs/ilp-cli
docker pull interledgerrs/ilp-settlement-ethereum
docker pull trufflesuite/ganache-cli
docker pull interledgerjs/settlement-xrp
docker pull redis
```

Run this command to build the Docker image for the Interledger.rs node, which may take a few minutes:

```
docker build -f ./docker/ilp-node.dockerfile -t interledgerrs/ilp-node --build-arg CARGO_BUILD_OPTION="--release --features monitoring --manifest-path ./crates/ilp-node/Cargo.toml" --build-arg RUST_BIN_DIR_NAME="release" https://github.com/interledger-rs/interledger-rs.git#ko-stream-reliability
```

Next, create a local Docker network so each service can communicate with each other:

```bash
docker network create local-ilp
```

Start a Redis database instance that will be shared across all the services:

```bash
docker run -d \
  --name redis \
  --network local-ilp \
  redis
```

(Each service will use a different database index so they don't conflict with one another.)

Then, launch a local Ethereum testnet with 10 prefunded accounts to use as a settlement ledger between Alice and Bob:

```bash
docker run -d \
  --name ethereum-testnet \
  --network local-ilp \
  trufflesuite/ganache-cli \
  -m "abstract vacuum mammal awkward pudding scene penalty purchase dinner depart evoke puzzle" \
  -i 1
```

The mnemonic after the `-m` flag is provided so the keys for Alice and Bob aren't randomized, and the `-i` flag configures the Ethereum network ID to be the same as the Ethereum mainnet.

## 2. Start the nodes

This section walks through creating the three nodes: Alice, Bob, and Charlie.

The names assigned to each container will be the hostnames used to network between them. For example, since Alice's node will be named `alice-node` and the HTTP API is bound to the port `7770`, `http://alice-node:7770` is the URL to access the API of Alice's node from other containers within the Docker network.

### Start Alice's node

First, start Alice's Ethereum settlement engine, which will be used to settle with Bob:

```bash
docker run -d \
  --name alice-eth \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-settlement-ethereum \
  --private_key 380eb0f3d505f087e438eca80bc4df9a7faa24f868e69fc0440261a0fc0567dc \
  --confirmations 0 \
  --poll_frequency 1000 \
  --ethereum_url http://ethereum-testnet:8545 \
  --connector_url http://alice-node:7771 \
  --redis_url redis://redis:6379/0 \
  --asset_scale 9 \
  --settlement_api_bind_address 0.0.0.0:3000
```

The provided private key corresponds to a prefunded Ethereum account in the Ganache testnet.

Next, start Alice's Interledger node:

```bash
docker run -d \
  --name alice-node \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-node \
  --ilp_address example.alice \
  --secret_seed 8852500887504328225458511465394229327394647958135038836332350604 \
  --admin_auth_token hi_alice \
  --redis_url redis://redis:6379/1 \
  --http_bind_address 0.0.0.0:7770 \
  --settlement_api_bind_address 0.0.0.0:7771 \
  --exchange_rate.provider CoinCap
```

### Start Bob's node

First, start Bob's Ethereum settlement engine, which will be used to credit incoming Ethereum payments from Alice:

```bash
docker run -d \
  --name bob-eth \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-settlement-ethereum \
  --private_key cc96601bc52293b53c4736a12af9130abf347669b3813f9ec4cafdf6991b087e \
  --confirmations 0 \
  --poll_frequency 1000 \
  --ethereum_url http://ethereum-testnet:8545 \
  --connector_url http://bob-node:7771 \
  --redis_url redis://redis:6379/2 \
  --asset_scale 9 \
  --settlement_api_bind_address 0.0.0.0:3000
```

Now, start Bob's XRP settlement engine, which will be used to settle with Charlie:

```bash
docker run -d \
  --name bob-xrp \
  --network local-ilp \
  -e "DEBUG=settlement*" \
  -e "CONNECTOR_URL=http://bob-node:7771" \
  -e "REDIS_URI=redis://redis:6379/3" \
  -e "ENGINE_PORT=3001" \
  interledgerjs/settlement-xrp
```

The XRP settlement engine will automatically generate a prefunded testnet account and credentials from the [official faucet](https://xrpl.org/xrp-test-net-faucet.html).

Lastly, start Bob's Interledger node:

```bash
docker run -d \
  --name bob-node \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-node \
  --ilp_address example.bob \
  --secret_seed 1604966725982139900555208458637022875563691455429373719368053354 \
  --admin_auth_token hi_bob \
  --redis_url redis://redis:6379/4 \
  --http_bind_address 0.0.0.0:7770 \
  --settlement_api_bind_address 0.0.0.0:7771 \
  --exchange_rate.provider CoinCap
```

Bob will pull exchange rates from the [CoinCap API](http://coincap.io/) for foreign exchange between ETH and XRP.

### Start Charlie's node

Start Charlie's XRP settlement engine to credit incoming settlements from Bob:

```bash
docker run -d \
  --name charlie-xrp \
  --network local-ilp \
  -e "DEBUG=settlement*" \
  -e "CONNECTOR_URL=http://charlie-node:7771" \
  -e "REDIS_URI=redis://redis:6379/5" \
  -e "ENGINE_PORT=3000" \
  interledgerjs/settlement-xrp
```

And lastly, start Charlie's Interledger node:

```bash
docker run -d \
  --name charlie-node \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-node \
  --secret_seed 1232362131122139900555208458637022875563691455429373719368053354 \
  --admin_auth_token hi_charlie \
  --redis_url redis://redis:6379/6 \
  --http_bind_address 0.0.0.0:7770 \
  --settlement_api_bind_address 0.0.0.0:7771 \
  --exchange_rate.provider CoinCap
```

## 3. Configure accounts

Next, create accounts which connect and peer each of the Interledger nodes together (Alice to Bob, and Bob to Charlie). Accounts track balances between the two counterparties, and are denominated and settled in an agreed currency. In this example, Alice and Bob denominate their bilateral accounts in ETH with 9 decimal places, whereas Bob and Charlie denominate their bilateral accounts in XRP with 6 decimal places.

Every Interledger packet corresponds to a particular account on the incoming side, and is routed to a subsequent account on the outgoing side. Accounts have parameters such as the maximum allowable packet size; authentication info for incoming and outgoing ILP packets; relations for how packets are routed; and balance parameters, such as credit limits and settlement thresholds.

Alice and Bob's bilateral accounts are each configured with their respective Ethereum settlement engines, and Bob and Charlie's bilateral accounts are each configured with their respective XRP settlement engines.

The `ilp-cli` tool and Docker image interacts with each Interledger node. To simplify issuing CLI commands to each node, create some aliases first:

```bash
alias   alice-cli="docker run --rm --network local-ilp interledgerrs/ilp-cli --node http://alice-node:7770"
alias     bob-cli="docker run --rm --network local-ilp interledgerrs/ilp-cli --node http://bob-node:7770"
alias charlie-cli="docker run --rm --network local-ilp interledgerrs/ilp-cli --node http://charlie-node:7770"
```

### Configure Alice's accounts

Create Alice's account:

```bash
alice-cli accounts create alice \
  --auth hi_alice \
  --ilp-address example.alice \
  --asset-code ETH \
  --asset-scale 9 \
  --ilp-over-http-incoming-token alice_password
```

Create the Alice ⇋ Bob account on Alice's node (ETH, peer relation):

```bash
alice-cli accounts create bob \
  --auth hi_alice \
  --ilp-address example.bob \
  --asset-code ETH \
  --asset-scale 9 \
  --settlement-engine-url http://alice-eth:3000 \
  --ilp-over-http-incoming-token bob_password \
  --ilp-over-http-outgoing-token alice_password \
  --ilp-over-http-url http://bob-node:7770/accounts/alice/ilp \
  --settle-threshold 100000 \
  --settle-to 0 \
  --routing-relation Peer
```

After more than 0.0001 ETH is fulfilled from Alice to Bob (`settle-threshold`), Alice will settle the entire liability with Bob (`settle-to`).

### Configure Bob's accounts

Create the Alice ⇋ Bob account on Bob's node (ETH, peer relation):

```bash
bob-cli accounts create alice \
  --auth hi_bob \
  --ilp-address example.alice \
  --asset-code ETH \
  --asset-scale 9 \
  --max-packet-amount 100000 \
  --settlement-engine-url http://bob-eth:3000 \
  --ilp-over-http-incoming-token alice_password \
  --ilp-over-http-outgoing-token bob_password \
  --ilp-over-http-url http://alice-node:7770/accounts/bob/ilp \
  --min-balance -150000 \
  --routing-relation Peer
```

Bob enforces that Alice will not owe him greater than 0.00015 ETH (`min-balance`). After that, she must settle to send additional ILP packets.

Create the Bob ⇋ Charlie account on Bob's node (XRP, child relation):

```bash
bob-cli accounts create charlie \
  --auth hi_bob \
  --asset-code XRP \
  --asset-scale 6 \
  --settlement-engine-url http://bob-xrp:3001 \
  --ilp-over-http-incoming-token charlie_password \
  --ilp-over-http-outgoing-token bob_other_password \
  --ilp-over-http-url http://charlie-node:7770/accounts/bob/ilp \
  --settle-threshold 10000 \
  --settle-to -1000000 \
  --routing-relation Child
```

After 0.01 XRP is fulfilled from Bob to Charlie (`settle-threshold`), Bob will settle the full liability _plus_ prepay Charlie 1 XRP (`settle-to`).

### Configure Charlie's accounts

Create the Bob ⇋ Charlie account on Charlie's node (XRP, parent relation):

```bash
charlie-cli accounts create bob \
  --auth hi_charlie \
  --ilp-address example.bob \
  --asset-code XRP \
  --asset-scale 6 \
  --settlement-engine-url http://charlie-xrp:3000 \
  --ilp-over-http-incoming-token bob_other_password \
  --ilp-over-http-outgoing-token charlie_password \
  --ilp-over-http-url http://bob-node:7770/accounts/charlie/ilp \
  --min-balance -50000 \
  --routing-relation Parent
```

Charlie enforces that Bob will not owe him greater than 0.05 XRP (`min-balance`). After that, he must settle to send additional ILP packets.

Lastly, create Charlie's account:

```bash
charlie-cli accounts create charlie \
  --auth hi_charlie \
  --asset-code XRP \
  --asset-scale 6 \
  --ilp-over-http-incoming-token charlie_password
```

## 4. Send a payment

Now, send a payment from Alice to Charlie, via Bob. Specifically, send a payment from the `alice` account on Alice's node, to the `$charlie-node:7770/accounts/charlie/spsp` payment pointer, which corresponds to the `charlie` account on Charlie's node.

To specify the amount, you must use base units. Since Alice's account is denominated in ETH with precision to 9 decimal places, to send the equivalent of 1 ETH, the amount would be `1000000000`, and to send 1 gwei, which is a very small amount of ETH, the amount would be `1`. This example sends a payment for 0.0002 ETH, which STREAM will packetize into many smaller ILP packets.

Note that when the payment is performed, Alice and Charlie's nodes will automatically coordinate with one another to ensure Bob doesn't take too large of a spread or offer a poor exchnage rate. By checking Bob's rate against an external prices, Alice and Charlie can determine the minimum rate and maximum slippage they're willing to accept. (In this case, they also use the CoinCap API.)

In order for this payment to fully complete within the credit limits set by each peer, Alice must settle by sending an ETH payment to Bob, and Bob must settle by sending an XRP payment to Charlie. Both will automatically be triggered in the background, so the whole payment will take approximately 5 seconds.

Now, send it!

```bash
alice-cli pay alice \
  --auth alice_password \
  --amount 200000 \
  --to http://charlie-node:7770/accounts/charlie/spsp
```

If the payment is successful, you should see output like this (the delivered amount will differ since the exchange rate will change):

```
{"delivered_amount":192613,"destination_asset_code":"XRP","destination_asset_scale":6,"from":"example.alice","in_flight_amount":0,"sent_amount":200000,"source_amount":200000,"source_asset_code":"ETH","source_asset_scale":9,"to":"example.bob.charlie.charlie.UlyQactA51Y9Kc8wu8oBVyUq"}
```

Congratulations, you just executed and settled a cross-currency Interledger payment!

## 5. Check balances

To print balances for each account across the 3 nodes, run these commands:

```bash
printf "\n========= ALICE'S NODE ========="
printf "\nAlice's balance: "
alice-cli accounts balance alice --auth hi_alice
printf "Bob's balance: "
alice-cli accounts balance bob --auth hi_alice

printf "\n========= BOB'S NODE ========="
printf "\nAlice's balance: "
bob-cli accounts balance alice --auth hi_bob
printf "Charlie's balance: "
bob-cli accounts balance charlie --auth hi_bob

printf "\n========= CHARLIE'S NODE ========="
printf "\nBob's balance: "
charlie-cli accounts balance bob --auth hi_charlie
printf "Charlie's balance: "
charlie-cli accounts balance charlie --auth hi_charlie
```

## 6. Stop services

To stop all the nodes and clean up Docker, run these commands:

```bash
docker stop redis ethereum-testnet alice-node bob-node charlie-node alice-eth bob-eth bob-xrp charlie-xrp
docker rm redis ethereum-testnet alice-node bob-node charlie-node alice-eth bob-eth bob-xrp charlie-xrp
docker network rm local-ilp
```
