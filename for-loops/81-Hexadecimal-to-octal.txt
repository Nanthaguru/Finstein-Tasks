public class Main
{
	public static void main(String[] args) {
        hexadecimalToOctal();
	}
	static void hexadecimalToOctal()
	{
        decimalToOctal(hexadecimalToDecimal());
	}
	static void decimalToOctal(int n)
	{
	    int a[] = new int[10],i=0;
	    for(int temp=n;temp!=0;temp/=8)
	        a[i++] = temp%8;
	    for(int j=i-1;j>=0;j--)
	        System.out.print(a[j]);
	}
	static int hexadecimalToDecimal()
	{
	    Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        int total = 0, j = 0;
        int len = str.length();
        
        for (int i = len - 1; i >= 0; i--) {
            char ch = str.charAt(i);
            if (ch >= 'A' && ch <= 'F') {
                total += (ch - 55) * Math.pow(16, j++);
            } else if (ch >= 'a' && ch <= 'f') {
                total += (ch - 87) * Math.pow(16, j++);
            } else {
                total += (ch - 48) * Math.pow(16, j++);
            }
        }
        scanner.close();
        return total;
	}
}
