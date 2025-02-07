function addNumbers(number1, number2){
    return number1 + number2;
}
function subNumbers(number1, number2){
    return number1 - number2;
}
function multiplyNumbers(number1, number2){
    return number1 * number2;
}
function divideNumbers(number1, number2){
    if(!(number2 == 0)){
        return number1 / number2;
    }
    return 'Cannot divide by zero';
}
function operate(number1, number2, operater){
    let result;
    switch(operater) {
        case '+':
            result = addNumbers(number1, number2);
            break;
        case '-':
            result = subNumbers(number1, number2);
            break;
        case '/':
            result = divideNumbers(number1, number2);
            break;
        case '*':
            result = multiplyNumbers(number1, number2);
            break;
        default:
            console.log('Unknown operation');
    }
    return result;
}
let input1 = 0;
let input2 = 0;
let output;
const result = document.querySelector('.result');
result.textContent = '0';
const elements = document.querySelectorAll('.element.number');
let number = '';
elements.forEach((element) => {
    element.addEventListener('click', () => {
        number = String(number);
        number += element.textContent;
        result.textContent = number;
        number = Number(number);
        input1 = number;
        console.log(input1);
    })
})
const clear = document.querySelector('.element.clear');
clear.addEventListener('click', () => {
    result.textContent = '0';
    input1 = 0;
    input2 = 0;
    output = 0;
    number = '';
})
let operation = '';
const operators = document.querySelectorAll('.element.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        output = operate(input1, input2, operator.textContent);
        operation = operator.textContent;
        console.log(output);
        number = '';
        input2 = output;
        input1 = 0;
    })
})
const equal = document.querySelector('.element.equal');
equal.addEventListener('click', () => {
    output = operate(input1, input2, operation);
    result.textContent = output;
})