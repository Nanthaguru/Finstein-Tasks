public class Main
{
	public static void main(String[] args) {
        pattern4(4);
	}
	static void pattern4(int rows){
	    int k=1;
	    for(int i=1;i<=rows;i++)
	    {
	        for(int j=1;j<=i;j++)
	            System.out.print((k++) +" ");
	        System.out.println();
	    }
	}
}
