public class Main
{
	public static void main(String[] args) {
	    series7(5,2);
	}
	
	static void series7(int n, int x)
	{
	    int val=3,sum=x;
	    for(int i=2;i<=5;i++)
	    {
	        if(i%2!=0)
	            sum = sum + (int)(Math.pow(x,val));
	        else
	            sum = sum - (int)(Math.pow(x,val));
	        val+=2;
	    }
	    System.out.println("The sum of the series upto "+n+" terms is: "+ sum);
	}
}
