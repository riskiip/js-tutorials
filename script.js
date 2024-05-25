let myNumber = 1;
let carObj = {
  merk: "Toyota Avanza",
  color: "Black",
  owner: "John Doe",
  year: 2011,
  capacity: 7,
};
let hideTable = true;

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

function summarizeNumber() {
  let initNumber = 0,
    summary = 0;

  while (initNumber >= 0) {
    summary += initNumber;
    initNumber = parseInt(prompt("Enter some number"));
  }
  console.log("The result is " + summary);
}

function doWhileGenerator() {
  let target = document.getElementById("targetParagraph"),
    initNum = 1;
  do {
    target.innerHTML += "Automated generated " + initNum + " paragraph <br/>";
    initNum++;
  } while (initNum <= 5);
  target.innerHTML += "Stop";
}

function primeNumber() {
  let totalPrimeNumber = 0;
  for (let i = 1; i <= 20; i++) {
    let prime = i > 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(i, "is a prime number");
      totalPrimeNumber += 1;
    } else {
      console.log(i, "is not a prime number");
    }
  }
}

function printCarObj() {
  hideTable = !hideTable;
  if (!hideTable) {
    document.getElementById("tableCar").style.display = "block";
  } else {
    document.getElementById("tableCar").style.display = "none";
  }
  document.getElementById("merkCarObj").innerHTML = carObj.merk;
  document.getElementById("colorCarObj").innerHTML = carObj.color;
  document.getElementById("ownerCarObj").innerHTML = carObj.owner;
  document.getElementById("yearCarObj").innerHTML = carObj.year;
  document.getElementById("capacityCarObj").innerHTML = carObj.capacity;
}
