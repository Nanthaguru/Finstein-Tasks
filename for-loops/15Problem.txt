public class Main
{
	public static void main(String[] args) {
	    problem15();
	}
	
	static void problem15()
	{
	    int sum= 0; float avg=0;
	    int count = 0,min = Integer.MAX_VALUE, max =0;
	    for(;1!=0;)
	    {
	        Scanner s = new Scanner(System.in);
	        System.out.print("Enter Number: ");
	        int n = s.nextInt();
	        if(n<1)
	        {
	            avg = sum/count;
	            System.out.println("Number of Positive integers: "+ count);
	            System.out.println("The maximum value is: "+ max);
	            System.out.println("The minimum value is: "+min);
	            System.out.println("The average is: "+avg);
	            break;
	        }
	        count++;
	        if(n<min)
	            min = n;
	        if(n>max)
	            max = n;
	       sum = sum + n;
	    }
	}
}
