import java.util.*;

public abstract class AccountBank {
    public String accountNumber;
    public String accountHolder;
    public double balance;
    public Transaction[] transactions = new Transaction[10]; 
    public int transactionCount = 0;

    public AccountBank(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        addTransaction("Initial Deposit", initialBalance);
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            addTransaction("Deposit", amount);
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            addTransaction("Withdrawal", -amount);
            System.out.println("Withdrew: $" + amount);
        } else {
            System.out.println("Invalid or insufficient funds for withdrawal.");
        }
    }

    public void showBalance() {
        System.out.println("Current Balance: $" + balance);
    }

    public void showTransactions() {
        if (transactionCount == 0) {
            System.out.println("No transactions found.");
        } else {
            System.out.println("Transaction History:");
            for (int i = 0; i < transactionCount; i++) {
                System.out.println(transactions[i]);
            }
        }
    }

    public final void addTransaction(String type, double amount) {
        if (transactionCount < transactions.length) {
            transactions[transactionCount] = new Transaction(type, amount, new Date());
            transactionCount++;
        } else {
            System.out.println("Transaction limit reached.");
        }
    }

    public abstract void showAccountType();
}