public class Main
{
	public static void main(String[] args) 
	{
	    countChars("This is w3resource.com");
	}
	static void countChars(String s){
	    int letters = 0, numbers = 0, spaces = 0, splchars = 0;
	    for(int i=0;i<s.length();i++)
	    {
	        if((s.charAt(i)>='A'&&s.charAt(i)<='Z')||(s.charAt(i)>='a'&&s.charAt(i)<='z'))
	            letters++;
	        else if(s.charAt(i)>=48 && s.charAt(i)<=57)
	            numbers++;
	        else if(s.charAt(i)==' ')
	            spaces++;
	        else
	            splchars++;
	    }
	    System.out.println("The number of characters in the string is: "+(letters+numbers+spaces+splchars));
	    System.out.println("The number of alphabets: "+letters);
	    System.out.println("The number of digits: "+numbers);
	    System.out.println("The number of spaces: "+spaces);
	    System.out.println("The number of other characters are: "+splchars);
	}
}
