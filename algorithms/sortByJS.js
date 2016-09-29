// compare is a function for compare two number, if the first argument is less than the second, return true, else return false

// bubble sort
function bubbleSort(arr, compare, begin, end) {
  var len = arr.length;
  if('number'!=typeof begin || 1>begin) {
    begin=1;
  }
  if('number'!=typeof end || len<end || 1>end) {
    end=len;
  }
  compare=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  var tmp;
  for(var i=0; i<end-begin; i++) {
    for(var j=begin-1; j<end-i-1; j++) {
      if(!compare(arr[j], arr[j+1])) {
        tmp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=tmp;
      }
    }
  }
}

// selection sort
function selectionSort(arr, compare, begin, end) {
  var len = arr.length;
  if('number'!=typeof begin || 1>begin) {
    begin=1;
  }
  if('number'!=typeof end || len<end || 1>end) {
    end=len;
  }
  compare=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  var min, tmp;
  for(var i=begin-1;i<end-1;i++) {
    min=i;
    for(var j=i+1;j<end;j++) {
      if(compare(arr[j],arr[min])) {
        min=j;
      }
    }
    tmp=arr[i];
    arr[i]=arr[min];
    arr[min]=tmp;
  }
}

// insertion sort
function insertionSort(arr, compare, begin, end) {
  var len = arr.length;
  if('number'!=typeof begin || 1>begin) {
    begin=1;
  }
  if('number'!=typeof end || len<end || 1>end) {
    end=len;
  }
  compare=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  var tmp=[];
  for(var i=begin; i<=end; i++) {
    // insert function has many ways
    directInsert(tmp, arr[i], compare);
  }

  for(i=begin;i<=end;i++) {
    arr[i]=tmp[i-begin];
  }
}
// insert ele into arr
function directInsert(arr, ele ,compare) {
  var len=arr.length;
  for(var i=0;i<len;) {
    if(compare(ele,arr[i++])) break;
  }
  for(var j=len-1;j>=i;) {
    arr[j]=arr[--j];
  }
  arr[--i]=ele;
}
// TODO there are other insert function


// TODO
// shell sort
function shellSort(arr, compare, begin, end) {

}




// quick sort
function quickSort(arr, compare, begin, end) {
  var len = arr.length;
  if('number'!=typeof begin || 1>begin) {
    begin=1;
  }
  if('number'!=typeof end || len<end || 1>end) {
    end=len;
  }
  compare=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  if(begin>=end) return;
  var i=begin-1, j=end;
  key=arr[i];
  while(i<j){
    while(compare(key,arr[--j])&&i<j);
    if(i>=j) break;
    arr[i]=arr[j];
    arr[j]=key;

    while(compare(arr[++i],key)&&i<j);
    if(i>=j) break;
    arr[j]=arr[i];
    arr[i]=key;
  }

  quickSort(arr, compare, begin, i);
  quickSort(arr, compare, i+2, end);
}
