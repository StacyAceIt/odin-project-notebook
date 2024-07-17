// script.js

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.btn:not(.number)');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const decimalButton = document.getElementById('decimal');

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
decimalButton.addEventListener('click', appendDecimal);

function appendNumber(number) {
  if (display.textContent === '0' || shouldResetScreen) resetScreen();
  display.textContent += number;
}

function resetScreen() {
  display.textContent = '';
  shouldResetScreen = false;
}

function clear() {
  display.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
}

function backspace() {
  display.textContent = display.textContent.toString().slice(0, -1);
  if (display.textContent === '') display.textContent = '0';
}

function appendDecimal() {
  if (shouldResetScreen) resetScreen();
  if (!display.textContent.includes('.')) display.textContent += '.';
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) return;
  if (currentOperator === '÷' && display.textContent === '0') {
    alert("You can't divide by 0!");
    return;
  }
  secondNumber = display.textContent;
  display.textContent = roundResult(operate(currentOperator, firstNumber, secondNumber));
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return null;
  }
}
