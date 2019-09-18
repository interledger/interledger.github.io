# Glossary

This glossary provides definitions for key terms in the Interledger ecosystem.

## Account
   
An accounting relationship between two Interledger participants. In Interledger, two participants establish an account with one another to track the current obligations they hold with one another. An Interledger account has a [balance](#balance) denominated in a mutually agreed upon asset (e.g. USD) at an agreed upon scale (e.g. 2).                                                                        

## Address

See instead: [Interledger Address](#interledger-address)

## Application Layer

The set of protocols built upon the [Transport Layer](#transport-layer) that communicate payment details between [senders](#sender) and [receivers](#receiver). 

Application Layer protocols specify all of the data and methods required to set up a payment for a specific category of use cases or applications. For example, the [Simple Payment Setup Protocol](#simple-payment-setup-protocol-spsp) uses HTTPS for account detail lookup.                                                                       

## Arbitrage

The practice of doing [cyclic transactions](#cyclic-transaction) which start and end on the same currency, or groups of simultaneous transactions which add up to one cyclic transaction. The goal is to achieve a destination amount which is higher than the source amount by taking advantage of fluctuations in exchange rates.                                                                       

## Asset

Something you can own that is fungible. Can be a physical item; a quantity of a physical substance; a specific physical collection of coins or banknotes; a non-physical quantity of currency; a non-physical claim to a resource; a reputation for keeping one's word; someone else's intention to obey the terms of a contract; etc.

## Balance 

An account balance is the net total of the amounts on any packets "successfully" routed between the peers. When a [node](#node) sends an ILP [Prepare packet](#interledger-packet) to a [peer](#peer), and receives a valid ILP [Fulfill](#interledger-packet) response, before the expiry of the ILP Prepare, their balance with that peer decreases, meaning the nodes owes the peer money. When a node receives an ILP Prepare packet and returns a valid ILP Fulfill response, before the expiry of the ILP Prepare, their balance with that peer increases, meaning the peer owes the node money.                              

## Bandwidth

The limit, set by a [router](#router), to the total value of ILP packets an account can send during a given time period. The limit may either be based on how much the router trusts the account-holder, or it may be used to prevent one account from tying up all of the router's bandwidth with its peers.                                                                       

## Clearing    

The transferring (transmitting, reconciling, and confirming) of funds from payer to payee, such that the payer's account is debited for the promised amount and the payee's account is credited for the equal amount. In Interledger this would involve the two peers exchanging data on what their current balance is and, if there is a discrepancy, resolving this.

See also: [Settlement](#settlement)                                                                       

## Connector

See instead: [Router](#router)                                                              

## Cyclic Transaction  

A transaction that is sent out from some sender's account and is received to another one of the sender's accounts. This can be useful when rebalancing liquidity (to enable future payments), or when rebalancing stored value (to spread risk, or to take advantage of changing exchange rates).                                                                      

## Destination Account 

The account of the receiver whose address is included in the Interledger packet.                                                                       

## Destination Amount  

The amount the receiver ends up receiving through [ILP](#interledger-protocol-ilp). The destination amount maybe different from the amount that the sender sends because each router, participating in the transaction, may apply their exchange rate and adjust the amount.

## Distributed Ledger

A ledger that is operated by a group of entities and runs on multiple servers. This term is used somewhat interchangeably with "Blockchain" or "Decentralized Ledger".                                                                        

## Exchange Rate

The price of one ledger's asset in terms of another ledger's asset. Routers may generate revenue from the difference in value between incoming and outgoing transfers. The exchange rate between a sender and a receiver is determined by the product of exchange rates at each hop.                                                                         

## Expiry 

The date and time when the [Prepare packet](#interledger-packet) expires. Each router changes the value of this field to set the expiry to an earlier time, before forwarding the packet.

## Fulfillment 

Also known as the "preimage" or "hash preimage", a fulfillment is  a 32-byte value used to trigger the execution of a transfer. In most Interledger payments, the fulfillment is known only to the receiver (or in the case of the STREAM protocol it is known to the sender and the receiver).       
See also: [Conditions and Fulfillments](https://github.com/interledger/rfcs/blob/master/0001-interledger-architecture/0001-interledger-architecture.md#conditions-and-fulfillments)                                                                 

## Hop 

A colloquial term for the manner in which value can move between two peers in the network. [ILP packets](#interledger-packet) travel from one router "hop" to another as they make their way through the Interledger network.                                                                         
## IL-RFC  

Interledger request for comments. A document describing a part of the protocol stack, or a topic related to it, such as this glossary. The official list of IL-RFCs is maintained in gh:interledger/rfcs.                                                                                                                               
## Interledger (in "Let's use Interledger for that!")  

The Interledger protocol stack.                                                                         

## interledger (in "An interledger network")

A network of two or more ledgers that use the Interledger protocol stack. 

See also: [Interledger (The)](#interledger-in-the-interledger) 

The adjective 'interledger' is also sometimes used to refer to transactions that cross multiple ledgers, even if ILP is not used (similar to 'international' meaning 'across multiple nations').                                                                         
## Interledger (in "The Interledger")  

The public network of ledgers connected via the Interledger protocol stack.                                                                         

## Interledger Address 

An Interledger address provides a way to route ILP packets to their intended destination through a series of hops, including any number of ILP routers. 

An Interledger address is a dot-separated string that is built up of segments which represent routers. An example address might look like `g.alice`, where `alice` would be the name of a router,  or `g.alice.dave`, where `dave` is an account held with the router `alice`.

Note that anyone can claim to have a certain Interledger address, there is no registry of them. Whether or not a payment ends up at the intended receiver is ultimately safeguarded by the hashlock condition, not by enforcement of address ownership. 

See also: [IL-RFC 15](https://github.com/interledger/rfcs/blob/master/0015-ilp-addresses/0015-ilp-addresses.md)                                                                      

## Interledger Architecture    

The Interledger protocol stack and the design principles behind it.

See also: [IL-RFC 1](https://github.com/interledger/rfcs/blob/master/0001-interledger-architecture/0001-interledger-architecture.md)                                                                       

## Interledger Layer   

The second layer of the Interledger protocol stack, consisting of the Interledger Protocol version 4 (ILPv4). This layer is concerned with currency amounts and whether each step in a payment arrives in time or expires. This protocol layer finds a path to connect a sender and receiver using any number of intermediaries.                                                                     

See also: [IL-RFC 1](https://github.com/interledger/rfcs/blob/master/0001-interledger-architecture/0001-interledger-architecture.md#interledger-protocol)

## Interledger Packet  

Also known as the ILP Packet.

This is the binary data packet that is routed across all hops from sender to receiver in all Interledger payments. ILPv4 has three packet types: Prepare, Fulfill, and Reject, which roughly correspond to request, response, and error messages.

The ILP Prepare packet contains the details of the Interledger transaction, including the destination ILP Address, the amount to be sent, an expiration timestamp, a Condition, and data for the receiver. The ILP Fulfill packet contains the Fulfillment and data from the receiver for the sender. The ILP Reject packet contains an error code and message, as well as the ILP Address of the node that produced the error.                                                                                  

## Interledger Protocol (ILP)  

The set of rules that define how Interledger nodes should communicate with each other. 

Colloquially, the whole Interledger stack is sometimes referred to as ILP. Technically, however, the Interledger Protocol is only one layer in the Interledger protocol stack.

See also: [IL-RFC 27](https://github.com/interledger/rfcs/blob/master/0027-interledger-protocol-4/0027-interledger-protocol-4.md)                                                             

## Interledger Protocol Stack  

The stack consisting of the link layer, Interledger layer, a choice of transport layer protocols, and the application layer.

## ILPv4

See instead: [Interledger Protocol](#interledger-protocol-ilp)                                                                    

## Ledger  

Stateful systems that are used for settlement and tracking the ownership of assets. Ledgers contain buckets of assets known as accounts and record transfers between them. Each account has a balance, which is the amount of the ledger's assets the account holds. Account balances may be positive or negative, representing assets or liabilities.                                                                       

In Interledger v1, all Interledger packets were sent through ledgers. In Interledger v4, ledgers are primarily used as Settlement Systems to settle Balances accrued between nodes.

## Link    

A communication path between two Interledger nodes to exchange ILP packets over an HTTPS or a WebSocket connection.

## Money Bandwidth

See instead: [Bandwidth](#bandwidth)                                                                     

## Node

A node is a participant in the Interledger network. It can be a sender, router, or receiver, which has an accounting relationship with one or more participants.                                                                

## Packetized Payment

A large payment which is split into smaller packets that are then sent sequentially. Packetized payments reduce the total amount of money in-flight at a given time, which can reduce certain risks and costs.                                                                      
See also: [Streaming Payment](#streaming-payment)

## Payment 

In the context of ILPv4, a payment is understood to mean the transfer of value from the sender (payer) to the receiver (payee). Higher-level protocols may execute a "payment" by sending a series of ILP Packets whose sum is equal to the desired payment value.                                                                      

## Payment Bandwidth

See instead: [Bandwidth](#bandwidth) 

## Payment Channel 

A payment channel is a medium used by two parties to perform multiple value transactions amongst them, without sending these transactions to the underlying ledger. One or both parties will generally transfer some of their value assets on the ledger to the payment channel. Value transfers are then made between the two parties by exchanging "claims" that update their balance. When one of the parties wishes to close the channel, they submit the final balance to the ledger.                                                                      
## Payment Pointer 

A payment pointer is a standardized identifier for accounts that can receive payments. It is like an email address, but for sending/receiving value.

A payment pointer resolves to an HTTPS URL that provides the location of a payment setup service endpoint at which a sender can initiate a payment to the receiver.

For example, a pointer pointer such as `$example.com/bob` will resolve to `https://example.com/bob` endpoint URL.

See also: [IL-RFC 26](https://github.com/interledger/rfcs/blob/master/0026-payment-pointers/0026-payment-pointers.md)                               

## Peer    

A router with which another router holds an account and exchanges routing information via the Interledger routing protocol.                                                                        

## Peering 

Routers "peer" (establish an account) with one another to exchange information used to determine the best route for a payment, and to route it. This is similar to how internet service providers peer with each other (https://en.wikipedia.org/wiki/Peering).                                                                         
## Prepare Phase   

The first phase of an ILP payment, in which the ILP packet is passed from the sender, via the router(s), to the receiver. This represents an intent to pay, so long as the Fulfillment is delivered before the expiry.  
                                                                      
## Receiver    

The Interledger node that is the final recipient of an Interledger payment.                                                                        

## Rejected    

A (final) transfer state whereby funds have been returned to the sender.                                                                        

## Route   

The path a payment has taken or a future payment could take.                                                                         

## Router  

An ILP router is similar to a network router on an IP network. Its primary function is to forward incoming packets between a sender and a receiver. 

A router may generate revenue from spreads on currency conversion, through subscription fees, or other means.
                            
## Routing Table   

A lookup table used by a router to decide who its outgoing receiver should be (the next hop, which can be another router or the destination receiver).                                                                         

## Sender  

The Interledger node that is the initiator (payer) of an Interledger payment.                                                                       

## Settlement  

The finalization of a payment, such that the payee takes the ownership of the transferred funds.                                               

## Simple Payment Setup Protocol (SPSP)

An application layer protocol for exchanging payment information - destination account and secret - over HTTPS, between a payee and a payer, to facilitate payment over Interledger. 

SPSP uses the STREAM as transport layer protocol. 

See also: [IL-RFC 9](https://github.com/interledger/rfcs/blob/master/0009-simple-payment-setup-protocol/0009-simple-payment-setup-protocol.md)                                                                                                                                                
## STREAM  

A Transport Protocol designed to be used with ILPv4. Application Layer protocols can use STREAM to send money and data between endpoints.

See also: [IL-RFC 29](https://github.com/interledger/rfcs/blob/master/0029-stream/0029-stream.md)                                               

## Streaming Payment   

An ongoing payment where small amounts of money are sent over time to pay for some ongoing service or rent. For instance, a user might pay for a streaming video with a streaming payment. The term "streaming payment" is commonly reserved for cases where the interval is short, from one second up to about a day.                                                                      

## Transaction 

See instead: [Payment](#payment)                                                                                                                                             

## Transport Layer 

The transport layer transports payment data between two parties, using the [STREAM](https://github.com/interledger/rfcs/blob/master/0029-stream/0029-stream.md) protocol. Transport Layer is the middle layer of the Interledger protocol stack, which determines the condition and encoding of the data in the ILP Packet. It also determines what details the sender and receiver need to discuss beforehand.                                                                      