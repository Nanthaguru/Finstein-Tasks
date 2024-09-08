{
	public static void main(String[] args) {
        checkerBoardPattern(5);
	}
	static void checkerBoardPattern(int rows)
	{
	    String s = "black";
	    for(int i=1;i<=rows;i++)
	    {
	        if(i%2!=0)
	            s = "black";
	        else  
	            s = "white";
	        for(int j=1;j<=rows;j++)
	        {
	            System.out.print(s);
	            if(j<rows)
	                System.out.print("-");
	            if(s=="black")
	                s = "white";
	            else
	                s = "black";
	        }
	        System.out.println();
	    }
	}
}
