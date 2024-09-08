public class Main
{
	public static void main(String[] args) {
        pattern10(5);
	}
	static void pattern10(int rows){
	    int m=1;
	    for(int i=1;i<rows*2;i++)
	    {
	        int spaces = i>rows?i-rows: rows-i;
	        for(int j=1;j<=spaces;j++)
	            System.out.print(" ");
	        if(i<=rows)
	        {
	            for(int k=1;k<=m;k++)
	                System.out.print("*");
	            m+=2;
	        }
	        else{
	            if(i==rows+1)
	                m = m-4;
	            else
	                m = m-2;
	            for(int k=1;k<=m;k++)
	                System.out.print("*");
	        }
	        System.out.println();
	    }
	}
}
