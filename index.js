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
    let syncScroller = document.querySelector(".scroll-sync")
    let container = document.querySelector(".calculator-container")

    const updateScroller = function() {
        syncScroller.textContent = display.textContent

        if(display.textContent.length > 15) {
            container.classList.add("show-scroller")
            setTimeout(() => {
                container.scrollLeft = container.scrollWidth - container.clientWidth
            }, 10)
        } else {
            container.classList.remove("show-scroller")
        }

    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(!isNaN(button.textContent)) {
                display.textContent += button.textContent
            } else if( button.textContent === "+") {
                num1 = display.textContent;
                operator = add;
                display.textContent = ""
            } else if( button.textContent === "-") {
                num1 = display.textContent;
                operator = sub;
                display.textContent = ""
            } else if( button.textContent === "×"){
                num1 = display.textContent;
                operator = multiply;
                display.textContent = ""
            } else if (button.textContent === "÷") {
                num1 = display.textContent;
                operator = divide;
                display.textContent = ""
            } else if (button.textContent === "1/x") {
                num1 = display.textContent;
                display.textContent = inverse(num1)
            } else if (button.textContent === "x²") {
                num1 = display.textContent;
                display.textContent = square(num1)
            } else if (button.textContent === "√x") {
                num1 = display.textContent;
                display.textContent = squareRoot(num1)
            } else if (button.textContent === "+/-") {
                num1 = display.textContent;
                display.textContent = invertor(num1)
            } else if(button.textContent === "%") {
                num1 = display.textContent;
                operator = remainder
                display.textContent = ""
            } else if( button.textContent === "=") {
                num2 = display.textContent;
                
                if (operator === add) display.textContent = operate(operator, num1, num2)
                if (operator === sub) display.textContent = operate(operator, num1, num2)
                if (operator === multiply) display.textContent = operate(operator, num1, num2)
                if (operator === divide) display.textContent = operate(operator, num1, num2)
                if (operator === inverse) display.textContent = operate(operator, num1, num2)
                if (operator === square) display.textContent = operate(operator, num1, num2)
                if (operator === squareRoot) display.textContent = operate(operator, num1, num2)
                if (operator === invertor) display.textContent = operate(operator, num1, num2)
                if (operator === remainder) display.textContent = operate(operator, num1, num2)
            } else if(button.textContent === ".") {
                display.textContent += button.textContent
            } else if( button.textContent === "CE") {
                display.textContent = ""
            } else if( button.textContent === "⌫") {
                display.textContent = display.textContent.slice(0, display.textContent.length - 1)
            } else if (button.textContent === "C") {
                display.textContent = ""
                num1 = null;
                num2 = null;
                operator = null;
            }

            updateScroller();
        })
    });
}


let num1;
let num2;
let operator;

populator();
