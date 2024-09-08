public class Main
{
	public static void main(String[] args) {
        pattern7(5);
	}
	static void pattern7(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        int cols = rows-i;
	        for(int l=1;l<=cols;l++)
	            System.out.print(" ");
	        for(int j=1;j<=i;j++)
	            System.out.print(i+" ");
	        System.out.println();
	    }
	}
}
