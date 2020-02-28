## Set Up Interledger accounts to send and receive test funds

<!-- Will have to find all references to files that are being pulled, such as in https://xpring.io/ilp-testnet, and replace them with the new files. -->

To get started using Interledger, we'll walk through using a test network, which uses fake money, rather than transferring real value. This Interledger testnet is currently maintained by teams at [Xpring](https://xpring.io/) and [Coil](https://coil.com/), but anyone can join.

 The Xpring ILP testnet used in this tutorial is a network set up specifically to allow users to practice sending and receiving test currency values. With Interledger, all currency pairs that senders and receivers use are supported. For simplicity, this tutorial demonstrates sending and receiving test XRP only, but in practice senders and receivers can use different currencies.  

This tutorial describes two ways to create an Interledger account to send and receive test funds:

- With a Xpring ILP testnet account
- With a [rafiki.money](https://rafiki.money) account

Both of these types of Interledger accounts allow you to send and receive test funds, and are useful for developing and testing apps. This type of account can also be referred to as a "wallet."

If you want to send actual value in your app with an Interledger account, refer to the [Rust implementation of Interledger](http://interledger.rs), or the Java implementation of Interledger at [Hyperledger Quilt](https://www.hyperledger.org/projects/quilt). Because these efforts are open source, your contributions are welcome.

You can also perform these same tasks programmatically. See [Set up Interledger accounts programmaticallly](setup-wallets-programmatically.html).

### Create an Interledger account and get your own payment pointer

This section refers to the Xpring ILP testnet.

1. Open the login page for the Xpring ILP testnet wallet:: [https://wallet.ilpv4.dev/](https://wallet.ilpv4.dev/)<br>
   Read the Terms of Use and the Privacy Policy, as linked on that page.
2. If you agree with the specified terms and privacy policy, click **Sign in**.<br>
   You are prompted to sign in with one of Facebook, Github, or Google credentials.
3. For your login, select the option you prefer.<br>
   You can create multiple accounts that you control by signing in subsequently with other options.
4. You might be prompted to log in with your credentials, or if you are already logged in, you might be prompted for further authentication.<br>
   When you are logged in, you see a page with your payment pointer, in the following format:<br>
   `$money.ilpv4.dev/<your-account-name>`<br>
   As indicated by the payment pointer, this wallet uses the Interledger Protocol, v4. Because a new account does not have any test funds, you will want to add value to it.
5. Click **Make it rain**.<br>
  Your account now has 10 test XRP. To add more test XRP, continue to click the button until you have as many test XRP as you want.
6. If you want someone to pay you, provide them with your payment pointer and ask them to use their own payment pointer to send funds to your payment pointer.
7. If you want to pay someone, request that they provide you with their payment pointer and use their payment pointer to send them funds.<br>
   You can readily set up multiple accounts to get different payment pointers, and therefore experiment with sending payments in different scenarios where you have ready access to the accounts on both sides.

When you subsequently log in to this testnet again with the credentials that you used previously, you will see the current state of your wallet with the current amount of test XRP it has. Your account can receive test XRP when you are not logged in.   

### Send money between Interledger accounts

When you have test XRP in your account, you can send test XRP to another account.

1. Sign in to the testnet at [https://wallet.ilpv4.dev/](https://wallet.ilpv4.dev/). Look at the **Send** portion of the page on the right.
2. Enter the number of test XRP, in integer form, that you want to send.
3. Enter the payment pointer for the address to which you want to send test XRP.
4. Click **Send**.

The amount of test XRP in the lower left adjusts to the new value. To add more value to your account, click **Make it rain**.

### Create an account at rafiki.money

The [rafiki.money](https://rafiki.money) site allows you to create an Interledger-enabled wallet.

For your current purposes, you can use rafiki.money to create an Interledger account that is similar to the Interledger account you create when you sign in at [https://wallet.ilpv4.dev/](https://wallet.ilpv4.dev/).

1. Open [rafiki.money](https://rafiki.money).
2. Click **Create an account**.<br>
   A **Create an Account** box appears.
3. Enter the name and password you want for this account. Click **Signup**.<br>
    The rafiki.money site provides you a payment pointer with your selected name. You must next create a default account for your payment.  
4. Click **Add account**.<br>
   The **Create account** window appears.
5. Enter a name for your account and click **Create**.<br>
   You next have to assign a default account for your payment pointer.        
6. Click **No default account set for Payment pointer. Click here to assign default account**.
7. From the **Default Account** dropdown list, select an account and click **Submit**.<br>
   You can create additional accounts as desired. Each of these accounts belongs to the same payment pointer. You can send test XRP from any of these accounts, but the default account will be the recipient of any test XRP sent from another payment pointer.
8. To add test XRP to an account, click to select the account on the home page. Click **Add Funds** to add 100 test XRP to your account. Repeat as desired.

When you next visit rafiki.money, log in to work with the accounts you have set up.

### Send money with your rafiki.money payment pointer

With rafiki.money, a payment pointer has a default account to receive test funds from another payment pointer. You can create additional financial accounts under the same payment pointer that can also store test funds and be used to send test funds. These examples continue to use test XRP.

You can send and receive test XRP between rafiki.money accounts and other Interledger accounts.

1. On the rafiki.money home page, click the account you want to use to send test XRP.
2. Click **Send funds**.
3. Enter the **Payment Pointer** to which you want to send test XRP, and the **Amount (XRP)** value.  

Experiment with sending and receiving test funds between payment pointers on different sites, adding more test funds to your accounts as desired. In this tutorial, there are no transaction costs for sending and receiving test funds, but a different Interledger implementation could impose transaction costs.
