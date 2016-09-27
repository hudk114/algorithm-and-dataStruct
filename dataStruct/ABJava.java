public class DataStruct{

   public class Stack{
     private int top;
     private int base;
     final int INITLENGTH=20;
     private int[] arr=new int[INITLENGTH];

     public Stack(){
       init(INITLENGTH);
     }
     private void init(int num){
       top=0;
       base=0;
       setNum(num);
     }

     private void setNum(int num){
       int[] a=new int[num];
       if(arr.length<num) {
         for(int i=0;i<arr.length; i++) {
           a[i]=arr[i];
         }
       }
       else{
         for(int i=0;i<num;i++){
           a[i]=arr[i];
         }
       }
       arr=a;
     }


     private void destory(){

     }

     public void empty(){
       top=0;
       setNum(INITLENGTH);
     }

     public int getLength(){
       return top-base;
     }

     // TODO change to throw error
     public boolean push(int val){
       int len=arr.length;
       if(top-base>=len){
          setNum(len+INITLENGTH);
       }

       arr[top++]=val;

       return true;
     }

     public int pop(){
        if(top<=base){
          // TODO throw error
          return -1;
        }
        int val=arr[--top];
        return val;
     }

     public int getTop() {
       if(top<=base){
         // TODO throw error
         return -1;
       }
       return arr[top-1];
     }
   }

   public class Queue{
     private int front;
     private int rear;
     final int INITLENGTH=20;
     private int[] arr=new int[INITLENGTH];

     public Queue(){
       front=0;
       rear=0;
       setNum(INITLENGTH);
     }

     private void setNum(int num){
       int[] a=new int[num];
       if(arr.length<num) {
         for(int i=0;i<arr.length; i++) {
           a[i]=arr[i];
         }
       }
       else{
         for(int i=0;i<num;i++){
           a[i]=arr[i];
         }
       }
       arr=a;
     }

     public void destory(){

     }

     public void empty(){
       rear=0;
       setNum(INITLENGTH);
     }

     public int getLength(){
       return rear-front;
     }

     public boolean insert(int val){
       int len=arr.length;
       if(rear-front>=len){
          setNum(len+INITLENGTH);
       }
       arr[rear++]=val;
       return true;
     }

     public int shift(){
       if(rear<=front){
         return -1;
       }
       int ele=arr[front];
       for(int i=front;i<rear-1;){
         arr[i]=arr[++i];
       }
       rear--;
       return ele;
     }

     public int getHead(){
       if(rear<=front){
         return -1;
       }
       return arr[front];
     }

   }
}
