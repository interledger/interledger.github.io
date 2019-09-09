# Glossary

This glossary provides definitions for key terms in the Interledger ecosystem.

## Account
   
An accounting relationship between two Interledger participants. 
In Interledger, two participants establish an account with one another to track the current obligations they hold with one another.                                                                         

## Address

See instead: [Interledger Address](#interledger-address)

## Application Layer

The set of protocols built upon the Transport Layer that communicate payment details between senders and receivers. 

Application Layer protocols specify all of the data and methods required to set up a payment for a specific category of use cases or applications. For example, the Simple Payment Setup Protocol uses WebFinger and HTTPS for account detail lookup.                                                                       

## Arbitrage

The practice of doing cyclic transactions which start and end on the same ledger, or groups of simultaneous transactions which add up to one cyclic transaction. The goal is to achieve a destination amount which is higher than the source amount by taking advantage of fluctuations in exchange rates.                                                                       

## Asset

Something you can own. Can be a physical and unique item, a quantity of a physical substance, a specific physical collection of coins and banknotes, a non-physical quantity of currency, a non-physical claim to a resource, a reputation for keeping one's word, someone else's intention to obey the terms of a contract, etc. Some types of assets can be more easily traded on a ledger than others. Also, for some asset pairs it is easier to determine a fair exchange rate than for others.                                                                       

## Balance 

An account balance is the net total of the amounts on any packets "successfully" routed between the peers. When a node sends an ILP Prepare packet to a peer, and receives a valid ILP Fulfill response, before the expiry of the ILP Prepare, their balance with that peer decreases. When a node receives an ILP Prepare packet and returns a valid ILP Fulfill response, before the expiry of the ILP Prepare, their balance with that peer increases.                                                                        

## Bandwidth

The limit, set by a router, to the total value of ILP packets an account can send during a given time period. The limit may either be based on how much the router trusts the account-holder, or it may be used to prevent one account from tying up all of the router's bandwidth with its peers.                                                                       

## Clearing    

The transferring (transmitting, reconciling, and confirming) of funds from payer to payee, such that the payer's account is debited for the promised amount and the payee's account is credited for the equal amount. 

See also: [Settlement](#settlement)                                                                       

## Connector

See instead: [Router](#router)                                                              

## Cyclic Transaction  

A transaction where the destination account is the same account, on the same ledger, as the source account. This can be useful when rebalancing liquidity (to enable future payments), or when rebalancing stored value (to spread risk, or to take advantage of changing exchange rates).                                                                      

## Destination Account 

The account of the receiver whose address is included in the Interledger packet. Note that anyone can claim to have a certain Interledger address; address ownership is not enforced.                                                                       

## Destination Amount  

The amount to be received by the receiver.                                                                      

## Distributed Ledger

A ledger that is operated by a group of entities and runs on multiple servers. This term is used somewhat interchangeably with "Blockchain" or "Decentralized Ledger".                                                                        

## Exchange Rate

The price of one ledger's asset in terms of another ledger's asset. Routers may generate revenue from the difference in value between incoming and outgoing transfers. The exchange rate between source and destination is determined by the product of exchange rates at each hop.                                                                         

## Fulfillment 

A 32-byte value used to trigger the execution of a transfer. In most Interledger payments, the fulfillment is known only to the receiver (or in the case of the STREAM protocol it is known to the sender and the receiver).                                                                        

## Hold    

Part of the sender's, router's, and/or receiver's account balance is put "on hold" to reserve that balance for a specific ILP payment and is temporarily unavailable for use in other payments. The money is on hold while the ILP transfer is in the prepared state. If the transfer is executed, the money is no longer on hold, and added to the balance of the receiver of the transfer. If the transfer is rejected, the money is no longer on hold either, but is instead returned to the balance of the sender of the transfer.                                                                      

## Hop 

The movement of an ILP packet from one router to another as it travels through the Interledger network to reach its destination.                                                                         

## IL-RFC  

Interledger request for comments. A document describing a part of the protocol stack, or a topic related to it, such as this glossary. The official list of IL-RFCs is maintained in gh:interledger/rfcs.                                                                       

## Incoming (Transfer, Ledger, Amount) 

The transfer/ledger/amount relative to the participant who plays the 'receiver' role. 

See also: [Outgoing](#outgoing-transfer-ledger-amount)                                                         

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

An Interledger address is a dot-separated string that contains prefixes to group ledgers. An example address might look like `g.us.acmebank.acmecorp.sales.199` or `g.crypto.bitcoin.1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`. 
Note that anyone can claim to have a certain Interledger address, there is no registry of them. Whether or not a payment ends up at the intended receiver is ultimately safeguarded by the hashlock condition, not by enforcement of address ownership. 

See also: [IL-RFC 15](https://github.com/interledger/rfcs/blob/master/0015-ilp-addresses/0015-ilp-addresses.md)                                                                      

## Interledger Architecture    

The Interledger protocol stack and the design principles behind it.

See also: [IL-RFC 1](https://github.com/interledger/rfcs/blob/master/0001-interledger-architecture/0001-interledger-architecture.md)                                                                       

## Interledger Layer   

The second layer of the Interledger protocol stack, consisting of the Interledger Protocol version 4 (ILPv4). This layer is concerned with currency amounts, routing, and whether each step in a payment arrives in time or expires. This protocol finds a path to connect a sender and receiver using any number of intermediaries.                                                                        

## Interledger Module  

The part of a software application that processes ILP payments. Analogous to the network card of an internet-connected computer.                                                                       

## Interledger Packet  

Also known as the ILP Packet.

This is the binary data packet that is routed across all hops from sender to receiver in all Interledger payments. ILPv4 has three packet types: Prepare, Fulfill, and Reject, which roughly correspond to request, response, and error messages.

The ILP Prepare packet contains the details of the Interledger transaction, including the destination ILP Address, the amount to be sent, an expiration timestamp, a Condition, and data for the receiver. The ILP Fulfill packet contains the Fulfillment and data from the receiver for the sender. The ILP Reject packet contains an error code and message, as well as the ILP Address of the node that produced the error.                                                                                                                                 

The packet includes metadata which the receiver may need before fulfilling the payment. It also includes metadata (such as destination account and amount) that routers use to determine what path to take. Alternatively, if the incoming amount is not large enough, compared to the destination amount in the ILP packet, the router may choose not to route the payment at all.

ILPv4 has three packet types: Prepare, Fulfill, and Reject, which roughly correspond to request, response, and error messages.                                                                   

## Interledger Protocol (ILP)  

The set of rules that define how Interledger nodes should communicate with each other. 

Colloquially, the whole Interledger stack is sometimes referred to as ILP. Technically, however, the Interledger Protocol is only one layer in the Interledger protocol stack.

See also: [IL-RFC 27](https://github.com/interledger/rfcs/blob/master/0027-interledger-protocol-4/0027-interledger-protocol-4.md)                                                             

## Interledger Protocol Stack  

The stack consisting of the link layer, Interledger layer, a choice of transport layer protocols, and the application layer.

## ILPv4

See instead: [Interledger Protocol](#interledger-protocol-ilp)                                                                    

## Intermediate (transfer, ledger, amount) 

Any transfer/ledger/amount that is neither directly adjacent to the sender nor the receiver.                                                                        

## Ledger  

Stateful systems that are used for clearing, settlement, and tracking the ownership of assets. Ledgers contain buckets of assets known as accounts and record transfers between them. Each account has a balance, which is the amount of the ledger's assets the account holds. Account balances may be positive or negative, representing assets or liabilities.                                                                       

In Interledger v1, all Interledger packets were sent through ledgers. In Interledger v4, ledgers are primarily used as Settlement Systems to settle Balances accrued between nodes.


## Link    

A communication path between two Interledger nodes to exchange ILP packets over an HTTPS or a WebSocket connection.                                                                        

## Node

A node is a participant in the Interledger network. It can be a sender, router, or receiver, which has an accounting relationship with one or more participants.                                                                        

## Outgoing (Transfer, Ledger, Amount)

The transfer/ledger/amount relative to the party who plays the sender role. 

See also: [Incoming](#incoming-transfer-ledger-amount)                                                                 

## Packetized Payment

A large payment which is split into smaller packets that are then sent sequentially. Packetized payments reduce the total amount of money in-flight at a given time, which can reduce certain risks and costs.                                                                      

## Payment 

In the context of ILPv4, a payment is understood to mean the transfer of value from the sender (payer) to the receiver (payee). Higher-level protocols may execute a "payment" by sending a series of ILP Packets whose sum is equal to the desired payment value.                                                                      

## Payment Channel 

A payment channel is a medium used by two parties to perform multiple value transactions amongst them, without sending these transactions to the underlying ledger. One or both parties will generally transfer some of their value assets on the ledger to the payment channel. Value transfers are then made between the two parties by exchanging "claims" that update their balance. When one of the parties wishes to close the channel, they submit the final balance to the ledger.                                                                      

## Payment Pointer 

A payment pointer is a standardized identifier for accounts that can receive payments. It is like an email address, but for sending/receiving value.

A payment pointer resolves to an HTTPS URL that provides the location of a payment setup service endpoint at which a sender can initiate a payment to the receiver.                                                                  

## Peer    

A router with which another router holds an account.                                                                        

## Peering 

Routers "peer" (establish an account) with one another to exchange information used to determine the best route for a payment, and to route it. This is similar to how internet service providers peer with each other (https://en.wikipedia.org/wiki/Peering).                                                                         

## Prepare Phase   

The first phase of an ILP payment, in which the ILP packet is passed from the sender, via the router(s), to the receiver. This represents an intent to pay, so long as the Fulfillment is delivered before the expiry.                                                                   

## Prepared    

The state of a transfer in which the source account's funds are put on hold by the ledger until either the expiry is reached or the condition is fulfilled.                                                                         

## Receiver    

The Interledger node that is the final recipient of an Interledger payment.                                                                        

## Rejected    

A (final) transfer state whereby funds have been returned to the sender.                                                                        

## Route   

A set of transfers chained together by the routers between them. The route is the path a payment has taken, or a future payment could take.                                                                         

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

## Source (transfer, ledger, amount)   

The transfer/ledger/amount directly adjacent to the sender.                                                                         

## STREAM  

A Transport Protocol designed to be used with ILPv4. Application Layer protocols can use STREAM to send money and data between endpoints.

See also: [IL-RFC 29](https://github.com/interledger/rfcs/blob/master/0029-stream/0029-stream.md)                                                                   

## Streaming Payment   

An ongoing payment where small amounts of money are sent over time to pay for some ongoing service or rent. For instance, a user might pay for a streaming video with a streaming payment. The term "streaming payment" is commonly reserved for cases where the interval is short, from one second up to about a day.                                                                      

## Transaction 

See instead: [Payment](#payment)                                                                     

## Transfer    

The movement of assets from one peer to another. Multiple transfers can be chained together into one multi-hop payment.                                                                         

## Transport Layer 

The transport layer transports payment data between two parties, using the [STREAM](https://github.com/interledger/rfcs/blob/master/0029-stream/0029-stream.md) protocol. Transport Layer is the middle layer of the Interledger protocol stack, which determines the condition and encoding of the data in the ILP Packet. It also determines what details the sender and receiver need to discuss beforehand.                                                                      

## Value   

A financial asset that represents currency. It can be fiat (such as USD, EUR, JPY, etc.) or digital (such as  BTC, ETH, XRP, etc.). 
