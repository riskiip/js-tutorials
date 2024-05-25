let myNumber = 1;

function printWithAlert() {
  window.alert("Hello World with alert");
}

function printWithConsole() {
  console.log("Hello World");
}

function autoIncrement() {
  myNumber += 1;
  return console.log(myNumber);
}

function showTotal() {
  return window.alert(myNumber);
}

function calculation() {
  let firstNum = parseInt(document.getElementById("firstNum").value);
  let secondNum = parseInt(document.getElementById("secondNum").value);
  let operators = document.getElementById("dropdownOperators").value;
  let value = 0;
  switch (operators) {
    case "+":
      value = firstNum + secondNum;
      break;
    case "-":
      value = firstNum - secondNum;
      break;
    case "*":
      value = firstNum * secondNum;
      break;
    default:
      value = firstNum / secondNum;
      break;
  }
  document.getElementById("result").innerHTML = value;
}

function compareNumber() {
  let numberOne = parseInt(document.getElementById("numberOne").value);
  let numberTwo = parseInt(document.getElementById("numberTwo").value);
  let value = "";
  if (numberOne > numberTwo) {
    value = "First number is greater than second number";
  } else if (numberOne < numberTwo) {
    value = "First number is lower than second number";
  } else {
    value = "First number is the same with second number";
  }
  document.getElementById("resultComparison").innerHTML = value;
}
