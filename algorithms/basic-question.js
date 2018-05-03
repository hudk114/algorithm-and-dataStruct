// TODO this function can only handle num<10
// equation calculate
function equationCal (equation) {
  var arr = equation.split('');
  var i = 0;
  var numStack = new Stack();
  var operator = new Stack();
  var top;
  var a, b;
  while (arr[i]) {
    if (isNum(arr[i])) {
      numStack.push(parseInt(arr[i++]));
    } else {
      // is an operator
      top = operator.getTop();
      if (!top) {
        operator.push(arr[i++]);
      } else {
        switch (compareOperator(top, arr[i])) {
          case '>':
            // top has higher priority, should do first
            b = numStack.pop();
            a = numStack.pop();
            top = operator.pop();
            numStack.push(getResult(a, b, top));
            break;
          case '<':
            // top has lower priority, push
            operator.push(arr[i++]);
            break;
          case '=':
            // ')' meet '('
            operator.pop();
            i++;
            break;
        }
      }
    }
  }

  while (operator.getLength() > 0) {
    b = numStack.pop();
    a = numStack.pop();
    top = operator.pop();
    numStack.push(getResult(a, b, top));
  }
  var num = numStack.pop();
  return num;
}

function isNum (t) {
  var c = Number(t);
  if (c) return true;
  return false;
}

// return what priority when compare
function compareOperator (operator1, operator2) {
  var obj = {
    '+': {
      '+': '>',
      '-': '>',
      '*': '<',
      '/': '<',
      '(': '<',
      ')': '>'
    },
    '-': {
      '+': '>',
      '-': '>',
      '*': '<',
      '/': '<',
      '(': '<',
      ')': '>'
    },
    '*': {
      '+': '>',
      '-': '>',
      '*': '>',
      '/': '>',
      '(': '<',
      ')': '>'
    },
    '/': {
      '+': '>',
      '-': '>',
      '*': '>',
      '/': '>',
      '(': '<',
      ')': '>'
    },
    '(': {
      '+': '<',
      '-': '<',
      '*': '<',
      '/': '<',
      '(': '<',
      ')': '='
    },
    ')': {
      '+': '>',
      '-': '>',
      '*': '>',
      '/': '>'
    }
  };

  return obj[operator1][operator2];
}

function getResult (a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.floor(a / b);
  }
}
