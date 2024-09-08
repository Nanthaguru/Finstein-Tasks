public class Main
{
	public static void main(String[] args) {
	    series4(4,3);
	}
	
	static void series4(int n, int x){
	    float sum = 1; int val = 2;
	    for(int i=1;i<n;i++)
	    {
	        if(i%2!=0)
	            sum = sum - ((float)Math.pow(x,val)/fact(val));
	        else
	            sum = sum + ((float)Math.pow(x,val)/fact(val));
	       val+=2;
	    }
	 System.out.println(sum);   
	}
	static int fact(int n){
	    if(n==1)
	        return 1;
	    return n*fact(n-1);
	}
}
