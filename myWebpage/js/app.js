
function changeText() {
  document.getElementById("demo").innerHTML = "Hello JavaScript";   
}

function changeImage() {
    document.getElementById("img").src = "images/img3.jpg";
}

const val1_input = document.getElementById("val1");
const val2_input = document.getElementById("val2");
const result_field = document.getElementById("result");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function modulo(x, y) {
  return x % y;
}

function getVal1() {
  return parseFloat(val1_input.value);
}

function getVal2() {
  return parseFloat(val2_input.value);
}

function addClick() { 
  let a = getVal1();
  let b = getVal2();
  let result = add(a, b);
  result_field.value = result;
}

function subClick() { 
  let a = getVal1();
  let b = getVal2();
  let result = subtract(a, b);
  result_field.value = result;
}

function mulClick() { 
  let a = getVal1();
  let b = getVal2();
  let result = multiply(a, b);
  result_field.value = result;
}

function divClick() { 
  let a = getVal1();
  let b = getVal2();
  let result = divide(a, b);
  result_field.value = result;
}

function modClick() { 
  let a = getVal1();
  let b = getVal2();
  let result = modulo(a, b);
  result_field.value = result;
}
