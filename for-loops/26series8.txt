public class Main
{
	public static void main(String[] args) {
	    series8(5);
	}
	static void series8(int n)
	{
	    int sum = 0, num =1;
	    for(int i=0;i<n;i++)
	    {
	        sum = sum + num;
	        num = (num*10)+1;
	    }
	    System.out.println("The um of the series is: "+sum);
	}
}
