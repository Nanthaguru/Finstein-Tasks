public class Main
{
	public static void main(String[] args) {
        series9(10);
	}
	static void series9(int n){
	    double val = 1.0, sum = 0.0, pt=0.2, hold;
	    for(int i=1;i<=n;i++)
	    {
	        if(pt>0.9)
	            hold = val+(pt/10);
	        else    
	            hold = val+pt;
	        sum = sum + hold;
	        val = val + 1.0;
	        pt = pt + 0.1;
	    }
	    System.out.println(sum);
	}
}
