# moneyd
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