public class Main
{
	public static void main(String[] args) {
        pattern17(5);
	}
	static void pattern17(int rows)
	{
	    for(int i=rows;i>=1;i--)
	    {
	        for(int j=i;j<rows;j++)
	            System.out.print(" ");
	        for(int k=1;k<=i;k++)
	            System.out.print(k+" ");
	        System.out.println();
	    }
	}
}
