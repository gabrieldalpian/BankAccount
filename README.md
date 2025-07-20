# 🏦 Java Bank System

This is a Java console application that simulates a basic banking system. It allows users to create accounts, deposit and withdraw money, view transaction history, transfer funds, and more. It was built as a personal learning project to showcase object-oriented programming concepts in Java.

## 💡 Features

- Create **Savings** or **Checking** accounts
- Deposit and withdraw funds
- View current balance and transaction history
- Apply interest to savings accounts
- Support for overdraft in checking accounts
- Update account holder name
- Transfer money between accounts
- Delete accounts

## 🗂️ File Structure

- BankSystem.java – Main class that runs the console application
- AccountBank.java – Abstract class for account structure
- SavingsAccount.java – Subclass with interest logic
- CheckingAccount.java – Subclass with overdraft support
- Transaction.java – Class to store transaction history
