# Connecting to an ILP Testnet

This tutorial will help you start [`moneyd`](https://github.com/interledgerjs/moneyd) locally on your computer and 
connect it to an [ILP router](https://github.com/interledgerjs/ilp-connector) on the testnet.

This tutorial describes how to:

1. Configure and start `moneyd` to connect to an ILP router on the testnet
2. Send value in XRP to a [payment pointer](https://interledger.org/rfcs/0026-payment-pointers/) on the testnet

## Before you begin
For this tutorial you will need to:
 1. Install `moneyd` and SPSP. You can learn how to install `moneyd` 
and SPSP from the [Getting Started](getting-started.md) tutorial.
2. Install the [moneyd XRP uplink](https://github.com/interledgerjs/moneyd#uplinks) using the command:
```shell
npm install -g moneyd-uplink-xrp
```

NOTE: Even though Interledger supports many different underlying asset types, you do not need to use real 
cryptocurrency for this tutorial. Since you will be sending value through an ILP router on the testnet, 
funds will be sourced from the [XRP testnet faucet](https://xrpl.org/xrp-test-net-faucet.html) and 
will have no real-world value.

## Configuring moneyd
NOTE: Before configuring `moneyd`, make sure to delete the `.moneyd.test.json` config file, located in the home folder 
of your computer, if the file already exists.

To configure moneyd: 

1. Open a terminal and use the following command:
```shell
moneyd xrp:configure --testnet --advanced
```

2. When prompted for the `BTP host of parent connector`, enter:
```shell
js1.xpring.dev
```

3. Press enter for all other default options.

## Starting moneyd
After you’ve configured `moneyd`, run the following command to start it on your computer and connect it to an 
ILP router on the testnet:
```shell
moneyd xrp:start --testnet
```

If everything goes well, you should see `connector ready` in the logs similar to this:
```shell
2019-07-01T16:33:34.921Z connector:ilp-plugin-mini-accounts[local] info listening on port 7768
2019-07-01T16:33:34.924Z connector:app info connector ready (republic attitude). address=test.xpring-dev.js1.ilspServer.P7sCid1j1WzWayl2s4w8Tuu2yyBrLCqtRc9s4Umb3xg version=22.4.1
```

## Sending value
Once `moneyd` is connected to the router on the testnet, you can send value to `Alice` or `Carol`.

To send value to `Alice`, open a new terminal and run:
```shell
$ ilp-spsp send --amount 10 --receiver '$xpring.dev/alice/xrp'
```

If you were successful, you should see the following output on the sending terminal:
```shell
paying 10 to "$xpring.dev/alice/xrp"...
sent 10 units!
```