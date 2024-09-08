public class Main
{
	public static void main(String[] args) {
        binaryToHexadecimal(1011);
	}
	static void binaryToHexadecimal(int n)
	{
	    decimalToHex(binaryToDecimal(n));
	}
	static int binaryToDecimal(int n){
	    int temp = n,i=0,sum=0;
	    for(;temp!=0;temp/=10)
	        sum = sum + ((temp%10)*(int)(Math.pow(2,i++)));
	   return sum;
	}
	static void decimalToHex(int n)
	{
	    int a[] = new int[10],i=0;
	    for(int temp=n;temp!=0;temp/=16)
	        a[i++] = temp%16;
	    for(int j=i-1;j>=0;j--)
	    {
	        if(a[j]==10)
	            System.out.print("A");
	       else if(a[j]==11)
	            System.out.print("B");
	       else if(a[j]==12)
	            System.out.print("C");
	       else if(a[j]==13)
	            System.out.print("D");
	       else if(a[j]==14)
	            System.out.print("E");
	       else if(a[j]==15)
	            System.out.print("F");
	       else
	            System.out.print(a[j]);
	    }
	}
}
