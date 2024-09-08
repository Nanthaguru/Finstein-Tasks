public class Main
{
	public static void main(String[] args) {
	    evenNaturalNumbers(5);
	}
	
	static void evenNaturalNumbers(int n)
	{
	    int sum = 0;
	    System.out.print("The even numbers are: ");
	    for(int i=2;i<=n*2;i+=2){
	        System.out.print(i+" ");
	        sum+=i;
	    }
	    System.out.println("\nThe sum of even natural numbers upto "+n+" terms: "+sum);
	}
}
