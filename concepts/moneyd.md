# moneyd
[`moneyd`](https://github.com/interledgerjs/moneyd) is a daemon that enables you to connect to an Interledger node, 
and to send or receive value in the form of ILP packets to or from that node. `moneyd` works the same way 
as a traditional router where both transfer packets over the internet. Except with `moneyd`, the packets represent 
value being transferred rather than just data.

`moneyd` uses uplinks to connect to an Interledger node. An uplink allows moneyd to send messages 
(ILP packets) to a parent node, and to send/receive settlements (real money) with that parent connector. 

When you run `moneyd` using an uplink, it:
* Starts an Interledger node
* Listens on a local port
* Connects to a node on the Interledger network
* Receives ILP packets from your application and routes them to the connecting node
* Receives ILP packets from the connecting node and routes them to your application
 
NOTE: You *do not* need an uplink if you run `moneyd` to start a node locally because in this case, 
you’re not connecting to the Interledger network.