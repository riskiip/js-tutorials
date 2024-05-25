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
