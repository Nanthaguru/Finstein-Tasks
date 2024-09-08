public class Main
{
	public static void main(String[] args) {
        frequency(122345);
	}
	static void frequency(int n)
	{
	    int a[] = new int[10];
	    for(;n!=0;)
	    {
	        a[n%10]++;
	        n/=10;
	    }
	    for(int i=0;i<a.length;i++)
	        System.out.println("The frequency of "+i+" = "+a[i]);
	}
}
