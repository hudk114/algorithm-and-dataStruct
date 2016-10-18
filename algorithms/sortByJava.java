public class Sort {

  public void bubbleSort(int[] arr, int begin, int end){
    int len=arr.length;
    if(1>begin) begin=1;
    if(1>end||len<end) end=len;
    int tmp;
    for(int i=0;i<end-begin;i++){
      for(int j=begin-1;j<end-1-i;j++){
        if(arr[j+1]<arr[j]){
          tmp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=tmp;
        }
      }
    }
  }

  public void selectionSort(int[] arr, int begin, int end){
    int len=arr.length;
    if(1>begin) begin=1;
    if(1>end||len<end) end=len;

    int min, tmp;
    for(int i=begin-1;i<end-1;i++){
      min=i;
      for(int j=i+1;j<end;j++){
        if(arr[min]>arr[j]){
          min=j;
        }
      }
      tmp=arr[i];
      arr[i]=arr[min];
      arr[min]=tmp;
    }
  }

  public void directInsertionSort(int[] arr, int begin, int end){
    int len=arr.length;
    if(1>begin) begin=1;
    if(1>end||len<end) end=len;

    for(int i=begin;i<end;i++){
      int j=i;
      int a=arr[j];
      while(j>begin-1&&a<arr[j-1]){
        arr[j]=arr[--j];
      }
      arr[j]=a;
    }
  }

  public void shellSort(int[] arr, int begin, int end){
    int len=arr.length;
    if(1>begin) begin=1;
    if(1>end||len<end) end=len;

    for(int step=(end-begin+1)/2;step>0;step/=2){
      for(int i=begin-1+step;i<end;i++){
        int j=i,tmp=arr[j];
        while(j>begin-2+step&&arr[j]<arr[j-step]){
          arr[j]=arr[j-step];
          j-=step;
        }
        arr[j]=tmp;
      }
    }
  }

  // quick sort
  public static void quickSort(int[] arr, int begin, int end){
	    int len=arr.length;
    if(1>begin) begin=1;
    if(1>end||len<end) end=len;

    int index=sortOne(arr, begin-1, end-1);
    if(index>begin){
      quickSort(arr,begin,index);
    }
    if(end-2>index){
      quickSort(arr,index+2,end);
    }
  }
  private static int sortOne(int[] arr, int i, int j){
	    if(i>=j) return i;
	    int key=arr[i];
	    j++;

	    while(true){
	      while(arr[--j]>key);
	      if(i>=j) return j;
	      arr[i]=arr[j];
	      arr[j]=key;
	      while(arr[++i]<key);
	      arr[j]=arr[i];
	      arr[i]=key;
	      if(i>=j) return i;
	    }

	  }
}
