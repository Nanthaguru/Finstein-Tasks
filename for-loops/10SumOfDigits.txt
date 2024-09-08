public class Main
{
	public static void main(String[] args) {
	    sumOfDigits(5876);
	}
	static void sumOfDigits(int n){
	    int temp = n;
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
