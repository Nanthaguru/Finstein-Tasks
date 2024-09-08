public class Main
{
	public static void main(String[] args) {
	    pattern1(4);
	}
	static void pattern1(int rows){
	    for(int i=0;i<rows;i++)
	    {
	        for(int j=0;j<rows;j++)
	            System.out.print("# ");
	       System.out.println();
	    }
	}
}
