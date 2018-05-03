// compare is a function for compare two number, if the first argument is less than the second, return true, else return false
// TODO all this function should use deep clone as object swap

// bubble sort
function bubbleSort (arr, compare, begin, end) {
  var len = arr.length;
  if (typeof begin !== 'number' || begin < 1) {
    begin = 1;
  }
  if (typeof end !== 'number' || len < end || end < 1) {
    end = len;
  }
  compare =
    compare ||
    function (a, b) {
      if (a < b) return true;
      return false;
    };

  var tmp;
  for (var i = 0; i < end - begin; i++) {
    for (var j = begin - 1; j < end - i - 1; j++) {
      if (!compare(arr[j], arr[j + 1])) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

// selection sort
function selectionSort (arr, compare, begin, end) {
  var len = arr.length;
  if (typeof begin !== 'number' || begin < 1) {
    begin = 1;
  }
  if (typeof end !== 'number' || len < end || end < 1) {
    end = len;
  }
  compare =
    compare ||
    function (a, b) {
      if (a < b) return true;
      return false;
    };

  var min, tmp;
  for (var i = begin - 1; i < end - 1; i++) {
    min = i;
    for (var j = i + 1; j < end; j++) {
      if (compare(arr[j], arr[min])) {
        min = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
}
// select two element in one traversal
function advancedSelectionSort (arr, compare, begin, end) {
  var len = arr.length;
  if (typeof begin !== 'number' || begin < 1) {
    begin = 1;
  }
  if (typeof end !== 'number' || len < end || end < 1) {
    end = len;
  }
  compare =
    compare ||
    function (a, b) {
      if (a < b) return true;
      return false;
    };

  var min, max, tmp;
  for (var i = begin - 1, j = end - 1; i < j; i++, j--) {
    (min = i), (max = j);
    for (var k = i; k <= j; k++) {
      if (compare(arr[k], arr[min])) {
        min = k;
      }
      if (compare(arr[max], arr[k])) {
        max = k;
      }
    }
    tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
    // if the max is the first one, that means it is swaped
    if (max == i) {
      tmp = arr[j];
      arr[j] = arr[min];
      arr[min] = tmp;
    } else {
      tmp = arr[j];
      arr[j] = arr[max];
      arr[max] = tmp;
    }
  }
}

// insertion sort
function directInsertionSort (arr, compare, begin, end) {
  var len = arr.length;
  if (typeof begin !== 'number' || begin < 1) {
    begin = 1;
  }
  if (typeof end !== 'number' || len < end || end < 1) {
    end = len;
  }
  compare =
    compare ||
    function (a, b) {
      if (a < b) return true;
      return false;
    };

  var i = 0,
    j,
    tmp;
  for (var i = begin; i < end; i++) {
    j = i;
    // compare, found the right position where arr[j] insert
    tmp = arr[j];
    while (j > begin - 1 && tmp < arr[j - 1]) {
      arr[j] = arr[--j];
    }
    arr[j] = tmp;
  }
}

// TODO use the best step forward
// shell sort
function shellSort (arr, compare, begin, end) {
  var len = arr.length;
  if (typeof begin !== 'number' || begin < 1) {
    begin = 1;
  }
  if (typeof end !== 'number' || len < end || end < 1) {
    end = len;
  }
  compare =
    compare ||
    function (a, b) {
      if (a < b) return true;
      return false;
    };

  var i,
    j,
    tmp,
    step = Math.floor((end - begin + 1) / 2);
  while (step > 0) {
    // every element from the step to end need sort
    for (i = begin - 1 + step; i < end; i++) {
      j = i;
      tmp = arr[j];
      while (j > begin + step - 2 && tmp < arr[j - step]) {
        arr[j] = arr[j - step];
        j -= step;
      }
      arr[j] = tmp;
    }

    step = Math.floor(step / 2);
  }
}

// quick sort
function quickSort (arr, compare, begin, end) {
  var len = arr.length;
  if (typeof begin !== 'number' || begin < 1) {
    begin = 1;
  }
  if (typeof end !== 'number' || len < end || end < 1) {
    end = len;
  }
  compare =
    compare ||
    function (a, b) {
      if (a < b) return true;
      return false;
    };

  if (begin >= end) return;
  var i = begin - 1,
    j = end;
  key = arr[i];
  while (i < j) {
    while (compare(key, arr[--j]) && i < j);
    if (i >= j) break;
    arr[i] = arr[j];
    arr[j] = key;

    while (compare(arr[++i], key) && i < j);
    if (i >= j) break;
    arr[j] = arr[i];
    arr[i] = key;
  }

  quickSort(arr, compare, begin, i);
  quickSort(arr, compare, i + 2, end);
}
