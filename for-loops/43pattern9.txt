public class Main
{
	public static void main(String[] args) {
        pattern9(5);
	}
	static void pattern9(int rows){
	    int k=1;
	    for(int i=1;i<=rows;i++)
	    {
	        if(i%2==0){ k=0; }
	        else{ k=1; }
	        for(int j=1;j<=i;j++){
	            System.out.print(k+" ");
	            if(k==1){k=0;}
	            else{k=1;}
	        }
	        System.out.println();
	    }
	    
	}
}
