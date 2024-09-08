public class Main
{
	public static void main(String[] args) {
	    reverserDigit(12345);
	}
	static void reverserDigit(int n)
	{
	    for(int i=n;i!=0;i/=10)
	        System.out.print(i%10);
	}
}
