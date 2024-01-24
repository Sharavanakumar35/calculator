let expression = '';

  function appendChar(char) {
    expression += char;
    updateDisplay();
  }

  function performOperation(operator) {
    expression += ' ' + operator + ' ';
    updateDisplay();
  }

  function calculate() {
    if (expression.trim() !== '') {
        const result = eval(expression);
        expression = result.toString();
    } else {
        expression = 'Error';
    }
    updateDisplay();
}

  function allClear() {
    expression = '';
    updateDisplay();
  }

  function clearEntry() {
    expression = expression.slice(0, -1);
    updateDisplay();
  }

  function signChange() {
    let expressionWithoutSpaces = expression.trim();

    if (expressionWithoutSpaces.slice(0, 1) !== '-') {
        expression = '-' + expression;
    } else {
        expression = expression.slice(1);
    }
    
    updateDisplay();
  }

  function updateDisplay() {
    document.getElementById('result').value = expression;
  }

  // Handle keyboard events
  document.addEventListener('keydown', function (event) {
    const key = event.key;
    console.log(key);
    let expressionWithoutSpaces = expression.trim();


    if (key >= '0' && key <= '9') {
        appendChar(key);
    } else if (!['+', '-', '*', '-', '%'].includes(expressionWithoutSpaces.slice(-1)) && ['+', '-', '*', '-', '%'].includes(key)) {
        performOperation(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'c' || key === 'C') {
        clearEntry();
    } else if (key === 'a' || key === 'A') {
        allClear();
    }
  });