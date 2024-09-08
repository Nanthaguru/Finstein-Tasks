public class Main
{
	public static void main(String[] args) {
	    divisibleByNine(100,200);
	}
	static void divisibleByNine(int s, int e)
	{
	    int sum = 0;
	    System.out.println("Numbers between "+s+" and "+e+", divisible by 9: ");
	    for(int i=s;i<=e;i++)
	    {
	        if(i%9==0)
	        {
	            System.out.print(i+" ");
	            sum = sum + i;
	        }
	    }
	    System.out.println("\nThe sum: "+sum);
	}
}
