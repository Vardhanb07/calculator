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
    switch(operater) {
        case '+' :
            addNumbers(number1, number2);
            break;
        case '-' :
            subNumbers(number1, number2);
            break;
        case '/' :
            divideNumbers(number1, number2);
            break;
        case '*' :
            multiplyNumbers(number1, number2);
            break;
        default:
            console.log('Unknown operation');
    }
}
// const buttons = document.querySelector('.buttons');
// for(let i = 0; i < 5; i++){
//     let head = document.createElement('div');
//     head.classList.add('head');
//     for(let j = 0; j < 4; j++){
//         let element = document.createElement('button');
//         element.classList.add('element');
//         element.textContent = `${i + j}`;
//         head.appendChild(element);
//     }
//     buttons.appendChild(head);
// }
