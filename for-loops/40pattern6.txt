public class Main
{
	public static void main(String[] args) {
        pattern6(4);
	}
	
	static void pattern6(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        int cols = rows-i;
	        for(int l=1;l<=cols;l++)
	            System.out.print(" ");
	        for(int j=1;j<=i;j++)
	            System.out.print("* ");
	        System.out.println();
	    }
	}
}
