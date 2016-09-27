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

  public void insertionSort(int[] arr, int begin, int end){
    int len=arr.length;
    if(1>begin) begin=1;
    if(1>end||len<end) end=len;

    int[] tmp=new int[len];
    for(int i=begin-1;i<end;i++){
      directInsert(tmp,arr[i],i+1);
    }
    for(int i=begin-1;i<end;i++){
      arr[i]=tmp[i];
    }
  }
  private void directInsert(int[] arr, int ele, int len){
    int i;
    // when break, i always point to the next element of which ele should insert
    for(i=0;i<len;){
      if(arr[i++]>ele) break;
    }
    for(int j=len-1;j>=i;){
      arr[j]=arr[--j];
    }
    arr[--i]=ele;
  }

  // quick sort
  public int[] quiceSort(int[] arr, int begin, int end){
    
  }
}
