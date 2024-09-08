public class Main
{
	public static void main(String[] args) {
        sumOfFirstAndLastDigit(1234);
	}
	static void sumOfFirstAndLastDigit(int n)
	{
	    int temp = n;
	    int last = n%10;
	    n = n/10;
	    for(;n>9;)
	        n=n/10;
	    System.out.println("The sum of first and last digit of "+temp+" is: "+(n+last));
	}
}
