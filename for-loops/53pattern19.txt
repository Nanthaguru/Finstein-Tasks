public class Main
{
	public static void main(String[] args) {
        pattern19(5);
	}
	static void pattern19(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        for(int j=1;j<=rows-i;j++)
	            System.out.print(" ");
	        for(int k=i;k>=1;k--)
	            System.out.print(k+" ");
	        System.out.println();
	    }
	}
}
