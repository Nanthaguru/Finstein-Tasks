public class Main
{
	public static void main(String[] args) {
        pattern16(5);
	}
	
	static void pattern16(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        for(int j=i;j<=rows;j++)
	            System.out.print(j);
	       System.out.println();
	    }
	}
}
