public class Main
{
	public static void main(String[] args) {
        binaryToDecimal(1010);
	}
	static void binaryToDecimal(int n){
	    int temp = n,i=0,sum=0;
	    for(;temp!=0;temp/=10)
	        sum = sum + ((temp%10)*(int)(Math.pow(2,i++)));
	    System.out.println(sum);
	}
}
