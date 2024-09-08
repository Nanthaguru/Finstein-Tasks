public class Main
{
	public static void main(String[] args) {
	    harmonicSeries(5);
	}
	
	static void harmonicSeries(int n)
	{
	    float sum = 0;
	    for(float i=1;i<=5;i++)
	    {
	        sum = sum+(1/i);
	        if(i<n)
	             System.out.print("1/"+(int)i+" + ");
	       else
	            System.out.print("1/"+(int)i);
	    }
	    System.out.println("\nThe sum of the series upto "+n+" terms: "+sum);
	}
}
