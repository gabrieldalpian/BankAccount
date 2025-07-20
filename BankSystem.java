import java.util.*;

public class BankSystem {
    public static Scanner scanner = new Scanner(System.in);
    public static AccountBank[] accounts = new AccountBank[10];
    public static int accountCount = 0;

    public static void main(String[] args) {
        System.out.println("Welcome to the Simple Bank System!");
        boolean running = true;

        while (running) {
            showMenu();
            int choice = getIntInput("Choose an option: ");

            switch (choice) {
                case 1 -> createAccount();
                case 2 -> deposit();
                case 3 -> withdraw();
                case 4 -> viewBalance();
                case 5 -> showTransactions();
                case 6 -> applyInterest();
                case 7 -> deleteAccount();
                case 8 -> transfer();
                case 9 -> updateAccountHolder();
                case 10 -> {
                    System.out.println("Thank you for using the Bank System.");
                    running = false;
                }
                default -> System.out.println("Invalid option. Try again.");
            }
        }
    }

    public static void showMenu() {
        System.out.println("\nBank Menu:");
        System.out.println("1. Create Account");
        System.out.println("2. Deposit");
        System.out.println("3. Withdraw");
        System.out.println("4. View Balance");
        System.out.println("5. View Transactions");
        System.out.println("6. Apply Interest (Savings Only)");
        System.out.println("7. Delete Account");
        System.out.println("8. Transfer Money");
        System.out.println("9. Update Account Holder Name");
        System.out.println("10. Exit");
    }

    public static void createAccount() {
        String name = getStringInput("Enter account holder name: ");
        String number = getStringInput("Enter account number: ");
        double deposit = getDoubleInput("Initial deposit: ");
    
        int type;
        do {
            type = getIntInput("Choose account type (1: Savings, 2: Checking): ");
        } while (type != 1 && type != 2);
    
        AccountBank account = null;
        switch (type) {
            case 1:
                account = new SavingsAccount(number, name, deposit);
                break;
            case 2:
                account = new CheckingAccount(number, name, deposit);
                break;
        }
    
        if (account != null && accountCount < accounts.length) {
            accounts[accountCount] = account;
            accountCount++;
            System.out.println("Account created successfully.");
        } else {
            System.out.println("Account creation failed.");
        }
    }

    public static void deposit() {
        AccountBank account = findAccount();
        if (account == null) return;
        double amount = getDoubleInput("Enter amount to deposit: ");
        account.deposit(amount);
    }

    public static void withdraw() {
        AccountBank account = findAccount();
        if (account == null) return;
        double amount = getDoubleInput("Enter amount to withdraw: ");
        account.withdraw(amount);
    }

    public static void viewBalance() {
        AccountBank account = findAccount();
        if (account == null) return;
        account.showAccountType();
        account.showBalance();
    }

    public static void showTransactions() {
        AccountBank account = findAccount();
        if (account == null) return;
        account.showTransactions();
    }

    public static void applyInterest() {
        AccountBank account = findAccount();
        if (account != null) {
            if (account instanceof SavingsAccount sa) {
                sa.applyInterest();
            } else {
                System.out.println("Interest can only be applied to savings accounts.");
            }
        }
    }

    public static void deleteAccount() {
        String number = getStringInput("Enter account number to delete: ");
        for (int i = 0; i < accountCount; i++) {
            if (accounts[i].accountNumber.equals(number)) {
                for (int j = i; j < accountCount - 1; j++) {
                    accounts[j] = accounts[j + 1];
                }
                accounts[accountCount - 1] = null;  
                accountCount--;
                System.out.println("Account deleted successfully.");
                return;
            }
        }
        System.out.println("Account not found.");
    }

    public static void transfer() {
        String fromNumber = getStringInput("Enter sender account number: ");
        AccountBank fromAccount = findAccountByNumber(fromNumber);
        if (fromAccount == null) {
            System.out.println("Sender account not found.");
            return;
        }

        String toNumber = getStringInput("Enter receiver account number: ");
        AccountBank toAccount = findAccountByNumber(toNumber);
        if (toAccount == null) {
            System.out.println("Receiver account not found.");
            return;
        }

        double amount = getDoubleInput("Enter amount to transfer: ");
        if (amount <= 0) {
            System.out.println("Invalid amount.");
            return;
        }

        if (fromAccount instanceof CheckingAccount ca) {
            if (amount > ca.balance + CheckingAccount.OVERDRAFT_LIMIT) {
                System.out.println("Insufficient funds including overdraft.");
                return;
            }
        } else if (amount > fromAccount.balance) {
            System.out.println("Insufficient funds.");
            return;
        }

        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        System.out.println("Transfer successful.");
    }

    public static void updateAccountHolder() {
        AccountBank account = findAccount();
        if (account == null) return;
        String newName = getStringInput("Enter new account holder name: ");
        account.accountHolder = newName;
        System.out.println("Account holder name updated successfully.");
    }

    public static AccountBank findAccount() {
        String number = getStringInput("Enter account number: ");
        return findAccountByNumber(number);
    }

    private static AccountBank findAccountByNumber(String number) {
        for (int i = 0; i < accountCount; i++) {
            if (accounts[i].accountNumber.equals(number)) {
                return accounts[i];
            }
        }
        System.out.println("Account not found.");
        return null;
    }

    public static String getStringInput(String prompt) {
        System.out.print(prompt);
        return scanner.nextLine();
    }

    public static int getIntInput(String prompt) {
        System.out.print(prompt);
        while (!scanner.hasNextInt()) {
            System.out.print("Invalid input. Try again: ");
            scanner.next();
        }
        int value = scanner.nextInt();
        scanner.nextLine();
        return value;
    }

    public static double getDoubleInput(String prompt) {
        System.out.print(prompt);
        while (!scanner.hasNextDouble()) {
            System.out.print("Invalid input. Try again: ");
            scanner.next();
        }
        double value = scanner.nextDouble();
        scanner.nextLine();
        return value;
    }
}