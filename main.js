// let keyZero = document.getElementById('zero');
// let keyOne = document.getElementById('one');
// let keyTwo = document.getElementById('two');
// let keyThree = document.getElementById('three');
// let keyFour = document.getElementById('four');
// let keyFive = document.getElementById('five');
// let keySix = document.getElementById('six');
// let keySeven = document.getElementById('seven');
// let keyEight = document.getElementById('eight');
// let keyNine = document.getElementById('nine');
//
// let divide = document.getElementById('divide');
// let multiply = document.getElementById('multiply');
// let subtract = document.getElementById('subtract');
// let addition = document.getElementById('addition');
//
// let keyClear = document.getElementById('clear');
// let displayBlock = document.getElementById('display-block');
// let keyDecimal = document.getElementById('decimal');
// let equals = document.getElementById('equals');
//
//
// keyOne.addEventListener('click', function clickOne(e){
//   if () {
//     let displayOne = keyOne.value;
//     let newDisplayOne = document.createElement
//   }
// })

//Number functions

function runOne() {
  document.calculator.result.value += 1;
}
function runTwo() {
  document.calculator.result.value += 2;
}
function runThree() {
  document.calculator.result.value += 3;
}
function runFour() {
  document.calculator.result.value += 4;
}
function runFive() {
  document.calculator.result.value += 5;
}
function runSix() {
  document.calculator.result.value += 6;
}
function runSeven() {
  document.calculator.result.value += 7;
}
function runEight() {
  document.calculator.result.value += 8;
}
function runNine() {
  document.calculator.result.value += 9;
}
function runZero() {
  document.calculator.result.value = 0;
}
function runDecimal() {
  document.calculator.result.value = ".";
}


//Operation functions

function runDivide() {
  document.calculator.result.value += "/";
}
function runAddition() {
  document.calculator.result.value += "+";
}
function runSubtract() {
  document.calculator.result.value += "-";
}
function runMultiply() {
  document.calculator.result.value += "*";
}
function runClear() {
  document.calculator.result.value = "";
}

//Evaluate function

function runEvaluate() {
  var evaluate = eval(document.calculator.result.value);

  document.calculator.result.value = evaluate;

}
