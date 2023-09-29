import java.util.Scanner;

public class PoundsToKg {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a weight in pounds: ");

        double pounds = scanner.nextDouble();

        double kilograms = pounds * 0.45359237;

        System.out.println(pounds + " pounds are more or less " + kilograms + " kilograms.");

        scanner.close();
    }
}