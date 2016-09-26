// compare is a function for compare two number, if the first argument is less than the second, return true, else return false

// bubble sort
function bubbleSort(arr, compare, begin, end) {
  var len = arr.length;
  var b, e;
  if('number' == typeof begin) {
    b=begin;
  } else {
    b=1;
  }
  if('number' == typeof end) {
    e=end;
  } else {
    e=len;
  }
  var c=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  var tmp;
  for(var i=0; i<e-b; i++) {
    for(var j=b-1; j<e-i-1; j++) {
      if(!c(arr[j], arr[j+1])) {
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
  var b, e;
  if('number' == typeof begin) {
    b=begin;
  } else {
    b=1;
  }
  if('number' == typeof end) {
    e=end;
  } else {
    e=len;
  }
  var c=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  var min, tmp;
  for(var i=b-1;i<e-1;i++) {
    min=i;
    for(var j=i+1;j<e;j++) {
      if(c(arr[j],arr[min])) {
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
  var b, e;
  if('number' == typeof begin) {
    b=begin;
  } else {
    b=0;
  }
  if('number' == typeof end) {
    e=end;
  } else {
    e=len-1;
  }
  var c=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  var tmp=[];
  for(var i=b; i<=e; i++) {
    // insert function has many ways
    directInsert(tmp, arr[i], c);
  }

  for(i=b;i<=e;i++) {
    arr[i]=tmp[i-b];
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




// TODO there is an error when init with begin and end
// quick sort
function quickSort(arr, compare, begin, end) {
  var len = arr.length;
  var b, e;
  if('number' == typeof begin) {
    b=begin;
  } else {
    b=0;
  }
  if('number' == typeof end) {
    e=end;
  } else {
    e=len;
  }
  var c=compare||function (a,b) {
    if(a<b) return true;
    return false;
  }

  if(1>=(e-b)) return;
  // use first as compare
  var s=arr[b];
  var fromBegin=0;
  var fromEnd=0;
  var tmp=[];
  for(var i=b+1; i<e; i++){
    if(c(arr[i],s)) {
      tmp[b+fromBegin++]=arr[i];
    } else {
      tmp[e-1-fromEnd++]=arr[i];
    }
  }
  tmp[b+fromBegin]=s;
  for(var i=b; i<e; i++){
    arr[i]=tmp[i];
  }
  quickSort(arr, compare, b, b+fromBegin);
  quickSort(arr, compare, b+fromBegin+1, e);
}
