## Set Up Interledger accounts to send and receive test XRP on Testnet

<!-- Will have to find all references to files that are being pulled, such as in https://xpring.io/ilp-testnet, and replace them with the new files. -->

When you create an [Interledger](overview.html) account on the Interledger Testnet, you create an address to send and receive test currency values. Testnet is a network set up specifically to allow users to practice sending and receiving test currency values. This tutorial demonstrates sending and receiving test XRP

You can create an Interledger account to send and receive test XRP in two ways:

- With a Xpring Testnet login
- By creating an account at [rafiki.money](https://rafiki.money)

Both of these types of Interledger accounts allow you to send and receive test XRP, instead of actual value, and are useful for developing and testing apps.

If you want to send actual value in your app with an Interledger account, refer to the [Rust implementation of Interledger](http://interledger.rs), or the Java implementation of Interledger at [Hyperledger Quilt](https://www.hyperledger.org/projects/quilt). Because these efforts are open source, your contributions are welcome.

### Log in to Xpring Testnet to create an Interledger account

1. Open the Xpring Testnet login page: [https://wallet.ilpv4.dev/](https://wallet.ilpv4.dev/)<br>
   Read the Terms of Use and the Privacy Policy, as linked on that page.
2. If you agree with the specified terms and privacy policy, click **Sign in**.<br>
   You are prompted to sign in with one of Facebook, Github, or Google credentials.
3. For your login, select the option you prefer.<br>
   You can create multiple accounts that you control by signing in separately with other options.
4. You might be prompted to log in with your credentials, or if you are already logged in, you might be prompted for further authentication.<br>
   When you are logged in, you see a page with your payment pointer, in the format `$money.ilpv4.dev/<your-account-name>`.
   As indicated by the payment pointer, this wallet uses the Interledger Protocol, v4.
   Because a new account does not have any test XRP value, you will want to add value to it.
5. Click **Make it rain**.<br>
  Your account now has 10 test XRP. To add more test XRP, continue to click the button until you have as many test XRP as you want.
6. If you want someone to send you test XRP, provide them with your payment pointer.
7. If you want to send test XRP to someone, request that they send you their payment pointer.<br>
   You can readily set up multiple accounts to get different payment pointers, and therefore experiment with sending test XRP in different scenarios where you have ready access to the accounts on both sides.

When you subsequently log in to Xpring Testnet with the same credentials, you will see the current state of your wallet with the current amount of test XRP.   

#### Send money with your Xpring login wallet

When you have test XRP in your account, you can practice sending test XRP to another account.

1. Sign in to Xpring Testnet at [https://wallet.ilpv4.dev/](https://wallet.ilpv4.dev/). Look at the **Send** portion of the page on the right.
2. Enter the number of test XRP, in integer form, that you want to send.
3. Enter the payment pointer for the address to which you want to send test XRP.
4. Click **Send**.

The amount of XRP in the lower left adjusts to the new value. To add more value to your account, click **Make it rain**.

### Create an account at rafiki.money

The [rafiki.money](https://rafiki.money) site is 

For your current purposes, you can use rafiki.money to create an Interledger account that is similar to the Interledger account you create when you first sign in to Xpring.

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

#### Send money with your rafiki.money accounts

With rafiki.money, a payment pointer has a default account to receive test XRP from another payment pointer. You can create additional financial accounts under the same payment pointer that can also store test XRP and be used to send test XRP.

You can send and receive test XRP between rafiki.money accounts and Xpring Testnet login accounts.

1. On the rafiki.money home page, click the account you want to use to send test XRP.
2. Click **Send funds**.
3. Enter the **Payment Pointer** to which you want to send test XRP, and the **Amount (XRP)** value.  

Experiment with sending and receiving test XRP between payment pointers on different sites, adding more value to your accounts as desired. With Testnet transactions, there are no transaction costs for sending and receiving test XRP.
