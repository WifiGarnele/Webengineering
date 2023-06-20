let currentResult = '';

let operatorSelected = false;

function appendNumber(number) {
  let result = document.getElementById("result");

  if (operatorSelected) {
    result.value += number;
    operatorSelected = false; // Setze den Operator-Status zurück
  } else {
    result.value += number;
  }
}

function appendOperator(operator) {
  let result = document.getElementById("result");

  // Überprüfe, ob bereits ein Operator ausgewählt wurde
  if (!operatorSelected) {
    result.value += operator;
    operatorSelected = true; // Setze den Operator-Status auf true
  }
}

function calculate() {
    let result=document.getElementById("result");
    result.value=eval(result.value);
}

function clearResult() {
  let result=document.getElementById("result");
  result.value='';
  
}
