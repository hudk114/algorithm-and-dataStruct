// father string & child string, return position, if not found, return -1
function kmp(strF, strC, pos) {
  var lenF=strF.length, lenC=strC.length;
  pos=pos&&pos>0&&pos<lenF?pos:1;
  var i=pos-1, j=0;
  var next=getNext(strC);

  while(i<lenF&&j<lenC) {
    if(-1==j||strF[i]==strC[j]){
      i++;j++;
    } else {
      j=next[j]-1;
    }
  }
  if(j>=lenC) {
    return i-j+1;
  }
  return -1;
}
function getNext(str) {
  var i=1, j=0, arr=[];
  arr[0]=0;
  while(i<str.length) {
    if(0==j||str[i-1]==str[j-1]) {
      arr[i]=++j;
      i++;
    } else {
      j=arr[j]-1;
    }
  }
  return arr;
}
