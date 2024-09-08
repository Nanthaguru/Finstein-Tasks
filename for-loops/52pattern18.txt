public class Main
{
	public static void main(String[] args) {
        pattern18(5);
	}
	static void pattern18(int rows)
	{
	    for(int i=rows;i>=1;i--)
	    {
	        for(int j=i;j>=1;j--)
	            System.out.print(j+" ");
	        System.out.println();
	    }
	}
}
