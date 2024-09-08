public class Main
{
	public static void main(String[] args) {
	    sumOfTenNaturalNumbers(7);
	}
	static void sumOfTenNaturalNumbers(int n)
	{
	    int sum = 0;
	    System.out.println("The natural numbers upto "+n+"th terms are: ");
	    for(int i= 1;i<=n;i++)
	   {   
	       System.out.print(i+" ");
	       sum+=i;
	   }
	    System.out.println("\n"+ "The sum of natural numbers is: "+sum);
	}
}
