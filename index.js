function add(a, b){
    a = parseInt(a)
    b = parseInt(b)

    return a + b;
}

function sub(a,b) {
    a = parseInt(a)
    b = parseInt(b)

    return a-b;
}

function multiply(a, b) {
    a = parseInt(a)
    b = parseInt(b)

    return a*b
}

function divide(a, b) {
    a = parseInt(a)
    b = parseInt(b)
    if (b === 0) {
        return "Can't divide by 0"
    }

    return a/b
}

function operate(operator, num1, num2) {
    if (operator == add) {
        return add(num1, num2)
    } else if(operator == sub) {
        return sub(num1, num2)
    } else if(operator == multiply) {
        return multiply(num1, num2)
    } else if(operator == divide) {
        return divide(num1, num2)
    } 

}

let num1;
let num2;
let operator;



