public class Main
{
	public static void main(String[] args) {
	    primeOrNot(2);
	}
	static void primeOrNot(int n)
	{
        int count = 0;
	    if(n<2)
	        count = 1;
	    else
	    {
	        for(int i=2;i<=n/2;i++)
	        {
	            if(n%i==0)
	                count++;
	        }
	   }
	   if(count==0)
	       System.out.println("Prime");
	   else
	       System.out.println("Not Prime");
	}
}
