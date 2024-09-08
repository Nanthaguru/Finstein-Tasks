public class Main
{
	public static void main(String[] args) {
        pattern14(7);
	}
	
	static void pattern14(int rows){
	    for(int i=1;i<=rows;i++)
	    {   char c = 64;
	        for(int j=1;j<=rows-i;j++)
	            System.out.print("  ");
	        int k=1;
	        for(;k<=i;k++)
	            System.out.print((++c)+" ");
	        c--;
	        for(int l=k-2;l>=1;l--)
	            System.out.print((c--)+" ");
	       System.out.println();
	        
	    }
	}
}
