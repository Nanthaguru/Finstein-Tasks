public class Main
{
	public static void main(String[] args) {
	    series5(5);
	}
	static void series5(int n){
	    int sum = 0, num = 9;
	    for(int i=0;i<n;i++)
	    {
	        sum = sum + num;
	        System.out.print(num+" ");
	        num = (num*10)+9;
	    }
	    System.out.println("\nThe sum of the series = "+sum);
	}
}
