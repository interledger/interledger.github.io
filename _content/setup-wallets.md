To get started using Interledger, we'll walk through using a test network, which uses fake money, rather than transferring real value. This Interledger testnet is currently maintained by teams at [Xpring](https://xpring.io/) and [Coil](https://coil.com/), but anyone can join.

The Xpring and Rafiki testnet connectors, both used in this tutorial, together form a network for users to practice sending and receiving test currency values.

With Interledger, all currency pairs that senders and receivers use are supported. For simplicity, this tutorial demonstrates sending and receiving test XRP only, but in practice senders and receivers can use different currencies.  

This tutorial describes two ways to create an Interledger account to send and receive test funds:

- With a [xpring.io](https://xpring.io) account
- With a [rafiki.money](https://rafiki.money) account

Both of these types of Interledger accounts allow you to send and receive test funds, and are useful for developing and testing apps. These types of accounts can also be referred to as "wallet" accounts.

You can also interact with these wallets programmatically. See [Use Interledger programmaticallly](use-interledger-programmatically.html).

If you want to send *actual* value in your app with an Interledger account, refer to the following open-source projects (contributions welcome):

* [Java Connector](https://connector.interledger4j.dev)  — Actively maintained by Xpring and recommended for new production deployments.
* [Rust Connector](http://interledger.rs)  — Not actively maintained, but recommended to get started for its ease of use and feature-set.
* [Javascript Connector](https://github.com/interledgerjs/ilp-connector)  — Battle-tested in production.

### 1. Create Interledger Wallet Accounts

For this tutorial, you should create both a xpring.io and rafiki.money wallet account.

#### Create an Account at xpring.io
1. Navigate to https://xpring.io and click `Create Dev Account`.
2. Log in to see the Xpring portal. Once logged-in, click on "Interledger Wallet" to get started.

#### Create an Account at https://rafiki.money

The [rafiki.money](https://rafiki.money) site also allows you to create an Interledger-enabled wallet that is compatible with the testnet wallet provided by Xpring. Use the following instructions to get setup:

1. Open [rafiki.money](https://rafiki.money).
2. Click **Create an account** and follow the instructions. 
3. Click **Add account** and enter a name for your account to create a new one. You can create multiple accounts if you want.
4. Click **No default account set for Payment pointer. Click here to assign default account**.
5. From the **Default Account** dropdown list, select an account and click **Submit** 
6. Notice that you can send test XRP from any of these accounts, but the default account will be the recipient of any incoming testnet funds sent from another account.

### 2. Locate Your Own Payment Pointer
1. In each wallet, you will see a page with a payment pointer in the following formats: `$xpring.money/{your-account-name}` (Xpring Wallet) and `rafiki.money/p/{user-id}` (Rafki Money). As indicated by the payment pointer, each wallet is Interledger-enabled. 
2. Because your new accounts don't have any test funds, you will want to add value to them. In Xpring, click the blue `Make it rain` button to get free money! In Rafki, click the `Add Funds` button.
3. If you want someone to pay you, provide them with your payment pointer. That's it!

Note that when you subsequently log in to either testnet account, you will see the current state of your wallet with the current amount of test XRP. Your accounts can receive test XRP when you are not logged in.   

### 3. Send Money Between Interledger Wallets
Once you have testnet funds in one of your wallets, you can send those funds to any other Interledger-enabled wallet.

1. Sign in to your account at [https://xpring.io](https://xpring.io)
2. Look at the **Send** portion of the page on the right.
3. Enter the number of test XRP that you want to send.
4. Enter the payment pointer for the address you want to send test XRP to (hint: try one from [https://rafiki.money](https://rafiki.money)).
5. Click **Send**.

The amount of test XRP in the lower left adjusts to the new value. At the same time, if you have your rafiki.money wallet account open in another tab, you will see your balance in that wallet account go down.

Next, send the money back via the following steps:

1. On the rafiki.money home page, click the account you want to use to send test XRP.
2. Click **Send** button (found in the upper-left of the screen).
3. Enter your Xpring **Payment Pointer**, the **Amount (XRP)**, and click **Send**.

Experiment with sending and receiving test funds between payment pointers on different sites, adding more test funds to your accounts as desired. In this tutorial, there are no transaction costs for sending and receiving test funds, but a different Interledger implementation could impose transaction costs.
