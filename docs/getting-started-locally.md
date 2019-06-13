# Starting an Interledger Node Locally Using moneyd

This tutorial describes how to:
* Install [`moneyd`](https://github.com/interledgerjs/moneyd) on your system
* Start an [Interledger](https://github.com/interledgerjs/ilp-connector) node on a local test network using moneyd
* Send and receive payments using the [SPSP](https://github.com/interledgerjs/ilp-protocol-spsp) (Simple Payment Setup Protocol) API

This tutorial is useful if you’re doing local development. It can also help you understand how Interledger payments work at a high level. 
This step-by-step tutorial can get you set up with moneyd and SPSP and get you ready to process Interledger payments locally. 

![Getting-Started-Locally](../assets/getting-started-locally.png)

## What is moneyd?
[`moneyd`](https://github.com/interledgerjs/moneyd) is a daemon that enables you to connect to peers through the Interledger protocol and to send value in the form of 
packets of data. Traditional routers and `moneyd` both transfer packets over the internet. With `moneyd`, the packets represent 
value being transferred rather than just data.

`moneyd` uses uplinks to connect to an Interledger node. An uplink wraps ILP plugins for `moneyd`’s use. 
They provide additional features such as payment channel management and configuration construction. 
For example, `moneyd-uplink-xrp` is an XRP uplink that connects `moneyd` to a peer Interledger node and creates an 
XRP payment channel. 

When you run `moneyd` using an uplink, it:
* Starts an Interledger node
* Listens on a local port
* Peers with a node on the Interledger network and creates a payment channel depending on the uplink used
* Receives packets of value from the sender and routes it to the peer node

NOTE: You *do not* need an uplink if you run `moneyd` to start a node locally because in this case, you’re not interacting on a payment channel, but you can process payments locally between a sender and a receiver.

## What is SPSP?
[SPSP](https://github.com/interledgerjs/ilp-protocol-spsp) (Simple Payment Setup Protocol) is an application layer protocol, which uses HTTP endpoints to securely exchange 
payment details, and then allows the user to send one or more Interledger packets. SPSP provides lightweight client-server 
APIs to send and receive payments. An [SPSP client](https://github.com/interledgerjs/ilp-spsp) sends a payment, and 
an [SPSP server](https://github.com/interledgerjs/ilp-spsp-server) receives a payment. An SPSP server must 
be connected to an Interledger node to receive payments. 

When you start an SPSP server, it:
* Connects to an Interledger node
* Creates a receiver
* Opens a port to listen to
* Generates a payment pointer<br/>
A payment pointer is like an email address, but for money. An SPSP client uses a recipient's payment pointer to send money.

## Before you begin
* Install a stable version of [Node.js](https://nodejs.org/en/) (10.16.0 LTS is recommended)
* Set up Node to install modules globally <br/>
Open a command line and use the following commands:  
  * `mkdir <new-npm-dir>`  
  * `npm config set prefix <path-to-new-npm-dir>`  
  * Add `<new-npm-dir>` to your system’s `PATH` environment variable

NOTE: For this tutorial, you *do not* need to use any cryptocurrency.

## Installing moneyd
To install `moneyd`, open a command line and run the following command:
```shell
npm install -g moneyd
```

## Starting a node
After you’ve installed `moneyd`, run the following command to start your local node:
```shell
moneyd local
```
Running the above command creates an Interledger node that listens on port 7768.

## Sending and receiving payments
Once you have `moneyd` running, you can send and receive payments over ILP using the SPSP API. For this tutorial, we’ll use the SPSP command line tool.

### Installing the SPSP client and server
To install an SPSP client and server, open a new command line and run:
```shell
npm install -g ilp-spsp ilp-spsp-server
```
### Starting the SPSP server
To receive payments, start the SPSP server using the following command:
```shell
ilp-spsp-server --subdomain my_subdomain
```
Replace `my_subdomain` with the name of your choice or a random string. 

### Sending a payment
Now, to send a payment, open another terminal and run:

*For Mac and Linux users*:
```shell
ilp-spsp send --amount 10 --receiver '$my_subdomain.localtunnel.me'
```
*For Windows users*:
```shell
ilp-spsp send --amount 10 --receiver “$my_subdomain.localtunnel.me”
```

You should see `sent!` on the sending terminal and `got packet for 10 units` on the receiving terminal confirming that you have successfully 
sent and received payment through the Interledger protocol. You are now ready to use SPSP in your applications.

### Sending a payment programmatically

To send a payment programmatically, you need to install `ilp-protocol-spsp` and `ilp-plugin` modules. Open a command line and use the following commands:

```shell
mkdir ilp-getting-started
cd ilp-getting-started
npm init
npm install --save ilp-protocol-spsp ilp-plugin
```
Now, using an editor of your choice, create a `index.js` file and add the following code snippet:

```shell
const plugin = require('ilp-plugin')()
const SPSP = require('ilp-protocol-spsp')

async function run () {
  console.log('paying $my_subdomain.localtunnel.me...')
  await SPSP.pay(plugin, {
    receiver: '$my_subdomain.localtunnel.me',
    sourceAmount: '10'
  })
  console.log('paid!')
}

run().catch(e => console.error(e))
```

Running the above code is equivalent to running the `ilp-spsp` command that you ran in previous section.