public class Main
{
	public static void main(String[] args) {
        pattern21(7);
	}
	static void pattern21(int rows){
	    for(int i=rows;i>=1;i--)
	    {
	        for(int j=i;j<rows;j++)
	            System.out.print(" ");
	        for(int j=1;j<=i;j++)
	            System.out.print(j);
	        for(int j=i-1;j>=1;j--)
	            System.out.print(j);
	        System.out.println();
	    }
	}
}
