public class Main
{
	public static void main(String[] args) 
	{
        uniqueDigit();
	}
	static void uniqueDigit()
	{
	    int count = 0;
	    System.out.println("The unique three digit numbers are: ");
	    for(int i=123;i<=432;i++)
	    {
	        int hundred = i/100;
	        int tens = (i/10)%10;
	        int ones = i%10;
	        if(hundred!=tens && tens!=ones && ones!=hundred && hundred>=1 && hundred<=4 && tens>=1 && tens<=4 && ones>=1 && ones<=4)
	        {
	            count++;
	            System.out.print(i+" ");      
	        }
	    }
	    System.out.println("\nTotal number of the three-digit-number is: "+count);
	}
}
