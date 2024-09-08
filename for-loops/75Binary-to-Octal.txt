public class Main
{
	public static void main(String[] args) {
        	binaryToOctal(1011);
	}
	static void binaryToOctal(int n){
	    decimalToOctal(binaryToDecimal(n));
	}
	static int binaryToDecimal(int n){
	    int temp = n,i=0,sum=0;
	    for(;temp!=0;temp/=10)
	        sum = sum + ((temp%10)*(int)(Math.pow(2,i++)));
	   return sum;
	}
	static void decimalToOctal(int n)
	{
	    int a[] = new int[10],i=0;
	    for(int temp=n;temp!=0;temp/=8)
	        a[i++] = temp%8;
	    for(int j=i-1;j>=0;j--)
	        System.out.print(a[j]);
	}
}
