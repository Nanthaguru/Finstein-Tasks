public class Main
{
	public static void main(String[] args) {
	    LCM(15,25);
	}
	
	static void LCM(int x, int y)
	{
	    int max = x>y? x:y;
	    for(int i=max;;i++)
	    {
	        if(i%x==0 && i%y==0)
	        {
	            System.out.println("The LCM of "+x+" and "+y+" is: "+i);
	            break;
	        }
	    }
	    
	}
}
