public class Main
{
	public static void main(String[] args) {
        decimalToBinary(35);
	}
	static void decimalToBinary(int n)
	{
	    int a[] = new int[10],i=0;
	    for(int temp=n;temp!=0;temp/=2)
	        a[i++] = temp%2;
	    for(int j=i-1;j>=0;j--)
	        System.out.print(a[j]);
	}
}
