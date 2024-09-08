public class Main
{
	public static void main(String[] args) {
        pattern1(5);
	}
	static void pattern1(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        for(int j=1;j<=i;j++)
	            System.out.print("* ");
	        System.out.println();
	    }
	}
}
