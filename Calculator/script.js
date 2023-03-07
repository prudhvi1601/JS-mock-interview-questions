let num1 = document.querySelector('#number1');
let num2 = document.querySelector('#number2');
let result = document.querySelector('#result');
let a = document. querySelector('.car');
let b = document.querySelector('.bike');
let c = document.querySelector('.pen');
let d = document.querySelector('.ink');

function addition(){

   result.value = Number(num1.value) + Number(num2.value);
}

function subtraction(){

   result.value = Number(num1.value) - Number(num2.value);
}

function product(){

   result.value = Number(num1.value) * Number(num2.value);
}

function division(){

   result.value = Number(num1.value) / Number(num2.value);
}

a.addEventListener("click",addition);
b.addEventListener("click",subtraction);
c.addEventListener("click",product);
d.addEventListener("click",division);