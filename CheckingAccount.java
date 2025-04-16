public class CheckingAccount extends AccountBank {
    public static final double OVERDRAFT_LIMIT = 100.0;

    public CheckingAccount(String accountNumber, String accountHolder, double initialBalance) {
        super(accountNumber, accountHolder, initialBalance);
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance + OVERDRAFT_LIMIT) {
            balance -= amount;
            addTransaction("Withdrawal", -amount);
            System.out.println("Withdrew: $" + amount);
        } else {
            System.out.println("Invalid or exceeds overdraft limit.");
        }
    }

    public void showAccountType() {
        System.out.println("Account Type: Checking");
    }
}