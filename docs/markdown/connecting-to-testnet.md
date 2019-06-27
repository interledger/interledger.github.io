# Connecting to an ILP Testnet

This tutorial will help you start an Interledger node locally on your computer and connect to an external ILP testnet.

This tutorial describes how to:

1. Configure moneyd to connect to a node on testnet
2. Start an Interledger node locally using moneyd
3. Send value to a payment pointer on the testnet

## Before you begin
For this tutorial, you will need `moneyd` and SPSP installed on your computer. You can learn how to install `moneyd` 
and SPSP from the Getting Started tutorial.

NOTE: For this tutorial you do not need to use real cryptocurrency. Since you will be running ILP on a testnet, 
funds will be used from a [testnet faucet](https://xrpl.org/xrp-test-net-faucet.html) and have no real-world value.

## Configuring moneyd
To configure moneyd: 

1. Open a terminal and use the following command:
```shell
moneyd xrp:configure --testnet --advanced
```

2. When prompted for the `BTP host of parent connector`, enter:
```shell
xpring.dev
```

3. Press enter for other default options.

## Starting moneyd
After you’ve configured `moneyd`, run the following command to start an Interledger node on your computer and 
connect it to a node on the testnet:

```shell
moneyd xrp:start --testnet
```

If everything goes well, you should see an output similar to this:

```shell
2019-06-27T16:26:34.520Z connector:ilp-plugin-mini-accounts[local] info listening on port 7768
2019-06-27T16:26:34.523Z connector:app info connector ready (republic attitude). address=test.xpring.dev.ilsp.MEH0isrV2BgBvIAXu1smeYjpMl9CsYIivdc2nldzLOY version=22.4.1
```
## Sending value
Now, to send value, open another terminal and run:

```shell
$ ilp-spsp send --amount 10 --receiver '$xpring.dev/xrp’
```

If you were successful, you should see the following output on the sending terminal:
```shell
paying 10 to "$xpring.dev/xrp"...
Sent 10 units!
```
