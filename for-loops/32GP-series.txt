public class Main
{
	public static void main(String[] args) {
        GeometricProgression(2,5,3);
	}
	static void GeometricProgression(int r, int t, int s){
	    int sum = 0;
	    for(int i=1;i<=t;i++)
	    {
	        sum = sum + s;
	        s = s * r;
	    }
	    System.out.println("The Sum of GP series is: "+sum);
	}
}
