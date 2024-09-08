import java.util.*;
public class Main
{
	public static void main(String[] args) {
        twoPrimeSum(20);
	}
	
	static void twoPrimeSum(int n){
        for(int i=2;i<=n/2;i++)
        {
            if(primeOrNot(i)==1 && primeOrNot(n-i)==1)
            {
                if((i+(n-i))==n){
                    System.out.println(n+"="+i+"+"+(n-i));
                }
            }
        }
	}
	static int primeOrNot(int n)
	{
        int count = 0;
	    if(n<2)
	        return 0;
	    else
	    {
	        for(int i=2;i<=n/2;i++)
	        {
	            if(n%i==0)
	                count++;
	        }
	   }
	   if(count==0)
	       return 1;
	   else
	       return 0;
	} 
}
