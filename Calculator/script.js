const num1 = document.querySelector('#number1');
const num2 = document.querySelector('#number2');
const operator = document.querySelector('#operator');
const button = document.querySelectorAll('#operator input');
const result = document.querySelector('#result')

 const str = num1.innerHTML + button.innerText + num2.innerHTML;
 function evaluate(){
    result.innerHTML = eval(str);
 }


button.addEventListener('click',evaluate);