public class Main
{
	public static void main(String[] args) {
        productOfdigits(3456);
	}
	static void productOfdigits(int n){
	    int mul=1,temp = n;
	    for(;n!=0;)
	    {
	        mul = mul *(n%10);
	        n=n/10;
	    }
	    System.out.println("The product of digits of "+temp+" is: "+mul);
	}
}
