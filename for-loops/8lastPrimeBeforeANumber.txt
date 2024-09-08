public class Main
{
	public static void main(String[] args) {
	    primeBeforeNumber(100);
	}
	
	static void primeBeforeNumber(int n){
	    int i=n-1;
	   for(;i>=2;i--)
	   {
	       if(primeOrNot(i)==1){
	            System.out.println(i+" is the last prime before "+n);
	            break;
	       }
	   }
	   if(i<=2)
            System.out.println("There is no prime in this range");
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
