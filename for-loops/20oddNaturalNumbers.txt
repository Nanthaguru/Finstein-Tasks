public class Main
{
	public static void main(String[] args) {
	    oddNaturalNumbers(5);
	}
	
	static void oddNaturalNumbers(int n)
	{
	    int sum = 0;
	    System.out.print("The odd numbers are: ");
	    for(int i=1;i<n*2;i+=2){
	        System.out.print(i+" ");
	        sum+=i;
	    }
	    System.out.println("\nThe sum of odd natural numbers upto "+n+" terms: "+sum);
	}
}
