import java.util.*;

public class Transaction {
    public String type;
    public double amount;
    public Date date;

    public Transaction(String type, double amount, Date date) {
        this.type = type;
        this.amount = amount;
        this.date = date;
    }

    public String toString() {
        return type + ": $" + amount + " on " + date;
    }
}