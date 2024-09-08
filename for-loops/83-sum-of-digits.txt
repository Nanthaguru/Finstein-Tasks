import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    Scanner s = new Scanner(System.in);
            int temp = s.nextInt();
	    int sum = temp%10;
	    temp/=10;
	    while(temp!=0)
	    {
	        sum+=temp%10;
	        temp/=10;
	    }
	    System.out.println("The sum of digits of "+n+" is: "+sum);
	}
}
