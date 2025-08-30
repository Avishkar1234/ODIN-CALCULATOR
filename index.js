function add(num1, num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    return num1 + num2;
}

function sub(num1,num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    return num1-num2;
}

function multiply(num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    return num1*num2
}

function divide(num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (num2 === 0) {
        return "Can't divide by 0"
    }

    return num1/num2;
}

function inverse(num1) {
    num1 = parseFloat(num1);
    return 1/num1;
}

function square(num1) {
    num1 = parseFloat(num1);
    return num1**2;
}

function squareRoot(num1) {
    num1 = parseFloat(num1)
    return Math.sqrt(num1)
}

function invertor(num1) {
    num1 = parseFloat(num1);
    return -num1;
}

function remainder(num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    return num1%num2;
}
console.log(squareRoot(2))

function operate(operator, num1, num2) {
    if (operator == add) {
        return add(num1, num2);
    } else if(operator == sub) {
        return sub(num1, num2);
    } else if(operator == multiply) {
        return multiply(num1, num2);
    } else if(operator == divide) {
        return divide(num1, num2);
    } else if(operator == inverse) {
        return inverse(num1);
    } else if(operator == square) {
        return square(num1);
    } else if(operator == squareRoot) {
        return squareRoot(num1);
    } else if(operator == invertor) {
        return invertor(num1)
    } else if(operator == remainder) {
        return remainder(num1, num2)
    }

}

const populator = function() {
    let display = document.querySelector(".display")
    let buttons = document.querySelectorAll(".button")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(!isNaN(button.textContent)) {
                display.textContent += button.textContent
            }
        })
    });
}

let num1;
let num2;
let operator;

populator();
