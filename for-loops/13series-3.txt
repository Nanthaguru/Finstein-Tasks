import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    series3();
	}
	static void series3()
	{
	    Scanner s = new Scanner(System.in);
	    System.out.print("Input the value for the nth term: ");
	    int n = s.nextInt();
	    int sum = 0;
	    for(int i=1;i<=n;i++)
	    {
	        int sum2 = 0;
	        for(int j=1;j<=i;j++)
	            sum2+=j;
	        sum+=sum2;
	    }
	    System.out.println("The sum is: "+ sum);
	}
}
