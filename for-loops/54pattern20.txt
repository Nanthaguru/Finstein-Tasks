public class Main
{
	public static void main(String[] args) {
        pattern20(5);
	}
	static void pattern20(int rows){
	    for(int i=1;i<=rows;i++)
	    {
	        for(int j=1;j<=rows-i;j++)
	            System.out.print("  ");
	        int k=1;
	        for(;k<=i;k++) 
	            System.out.print((int)(Math.pow(2,k-1))+" ");
	        for(int l=k-2;l>=1;l--)
	            System.out.print((int)(Math.pow(2,l-1))+" ");
	        System.out.println();
	    }
	}
}
