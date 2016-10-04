public int kmp(String strF, String strC, int pos){
  int fLen=strF.length();
  int cLen=strC.length();
  if(pos<0 || pos>fLen){
    pos=1;
  }
  int i=pos,j=1;

  int[] next=getNext(strC);

  while(i<=fLen&&j<=cLen){
    if(0==j||strF.charAt(i-1)==strC.charAt(j-1)){
    	i++;j++;
    }
    else {
    	j=next[j-1];
    }
  }
  if(j>=cLen) return i-j+1;
  return -1;
}
private int[] getNext(String str){
	  int len=str.length();
	  int[] arr=new int[len];
	  int i=1, j=0;
	  arr[0]=0;
	  while(i<len){
		  if(0==j||str.charAt(i-1)==str.charAt(j-1)){
			  arr[i]=++j;
			  i++;
		  }
		  else{
        //i and j always point to the next ele
			  j=arr[j-1];
		  }
	  }

	  return arr;
	}
