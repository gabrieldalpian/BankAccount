public class SavingsAccount extends AccountBank {
    public static final double INTEREST_RATE = 0.02;

    public SavingsAccount(String accountNumber, String accountHolder, double initialBalance) {
        super(accountNumber, accountHolder, initialBalance);
    }

    public void applyInterest() {
        double interest = balance * INTEREST_RATE;
        balance += interest;
        addTransaction("Interest", interest);
        System.out.println("Interest of $" + interest + " applied.");
    }

    public void showAccountType() {
        System.out.println("Account Type: Savings");
    }
}