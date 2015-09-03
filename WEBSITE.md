# Interledger

> Payments across payment networks

When paying online, we are usually confronted with a barrage of payment options.

[Mock merchant payment logos, e.g. VUZA, MisterCord, PayBall, Bitcoin ...]

The hope is that one of these options will match what we actually have.

This process is not just inconvenient, but it results in a few payment schemes with big reach that dictate the rules and the fees for everyone.

Decentralized ledgers are better, but they aren't neutral, there are huge economic interests involved, from Bitcoin miners to blockchain companies. As a result, discussions about cryptocurrencies too often turn into crazy holy wars.

To solve this problem we need a neutral protocol where users and merchants can each use <strong>different</strong> providers.

Dogecoin -> PayBall

This protocol must be neutral, like HTTP. It can't have a currency, or a blockchain or a way to make money. It should just solve the problem.

Decentralization isn't enough. It's not enough that there isn't a central operator of some network that you have to be connected to. This protocol, like HTTP, has to be a protocol you can autonomously of any core or "official" network.


## The basic idea

There are many ledgers out there. Payment systems, blockchains, banks and so on.

```
( )         ( )
    ( )
              ( )
( )      ( )
```

Market makers can create connections between them. You pay me here and I pay whoever you want over there. The industry calls this "payment-vs-payment", because someone is making a payment over there in exchange for a payment over here.

```
( )         ( )
 |  ( )     / \
 | /       /  ( )
( ) ---- ( )
```

But the problem with payment-vs-payment is: Who goes first? If the market maker goes first, they have to trust the sender to hold up their end of the bargain. If the sender goes first, the market maker could disappear with the money, never to be seen again.

The solution is pretty obvious: Escrow. Both the sender and the market maker share a common ledger. So let's have that ledger guarantee the transfer. The sender puts the money into escrow, the market maker delivers funds at the destination, shows proof and gets paid.

Notice how we didn't need any central coordinating super-ledger? We just created a truly neutral protocol for payments.

## Paths

But trying to find market makers for every possible pair of ledgers is unrealistic. The number of possible combinations explodes as the number of ledgers increases.

Instead, we create the ability to chain market makers together. Now we can use the magic of networks. As long as you're connected somewhere into the Interledger you can make payments. Ever heard of the [six degrees of separation](https://en.wikipedia.org/wiki/Six_degrees_of_separation)?

## White paper

For more details, read our white paper: A Protocol for Interledger Payments

## Benefits

So what do we get out of all this?

* Universal payments - No more barrage of logos, none of which happen to match what you have.
* Universal access - A local payment services provider (PSP) in Nigeria can accept global payments without getting permission from VISA.
* Competitive rates - Everyone can't be on the same currency, but a neutral protocol makes currency conversion a competitive business and the cheapest providers will get the volume. No more getting screwed by your bank with hidden FX fees.
* True freedom - You choose your ledger. If you want to use Kanyecoin, use Kanyecoin. It'll be accepted everywhere. You like proof-of-work? Proof-of-stake? Consensus? Or even just a regular bank account? Use it. It'll work.
* Scalability - Without a central ledger that all payments have to go through, scalability becomes a non-issue. Need more speed? Just create more ledgers and more market makers.

## Participate

The work to make Interledger payments a reality is currently happening at the W3C. Anyone can join the mailing list and participate.

Check out our draft specs.

We also have an implementation of the Interledger draft specs on Github. Fork it, clone it, hack it!

Let's fix payments once and for all!
