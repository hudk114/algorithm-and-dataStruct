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
