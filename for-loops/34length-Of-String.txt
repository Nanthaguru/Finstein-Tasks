public class Main
{
	public static void main(String[] args) {
        lengthOfString("NAnthaguru");
	}
	static void lengthOfString(String s)
	{
	    String s2 = s+"+";
	    int i=0;
	    for(;s2.charAt(i)!='+';i++){}
	    System.out.println("So, the length of the string "+s+" is: "+i);
	}
}
