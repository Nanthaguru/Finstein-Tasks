public class Main
{
	public static void main(String[] args) {
        stringReverse("w3resource");
	}
	static void stringReverse(String s)
	{
	    String rev = "";
	    for(int i=s.length()-1;i>=0;i--)
	        rev = rev + s.charAt(i);
	    System.out.println(rev);
	}
}
