public class Main
{
	public static void main(String[] args) {
        octalToBinary(17);
	}
	static void octalToBinary(int n)
	{
	    decimalToBinary(octalToDecimal(n));
	}
	static int octalToDecimal(int n)
	{
	    int sum=0, temp=n, i=0;
	    for(;temp!=0;temp/=10)
	        sum = sum + (temp%10)*((int)(Math.pow(8,i++)));
	   // System.out.println(sum);
	   return sum;
	}
	static void decimalToBinary(int n)
	{
	    int a[] = new int[10],i=0;
	    for(int temp=n;temp!=0;temp/=2)
	        a[i++] = temp%2;
	    for(int j=i-1;j>=0;j--)
	        System.out.print(a[j]);
	}

