public class Main
{
	public static void main(String[] args) {
        pattern8(5);
	}
	static void pattern8(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        for(int l=1;l<=rows-i;l++)
	            System.out.print("  ");
	        for(int j=rows-i;j<rows+i-1;j++)
	            System.out.print("* ");
	        System.out.println();
	    }
	}
}
