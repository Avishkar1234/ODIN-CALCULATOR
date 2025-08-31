function add(num1, num2){ return parseFloat(num1) + parseFloat(num2); }
function sub(num1, num2){ return parseFloat(num1) - parseFloat(num2); }
function multiply(num1, num2){ return parseFloat(num1) * parseFloat(num2); }
function divide(num1, num2){
    num2 = parseFloat(num2);
    if(num2 === 0) return "Can't divide by 0";
    return parseFloat(num1)/num2;
}
function inverse(num){ return 1/parseFloat(num); }
function square(num){ return parseFloat(num)**2; }
function squareRoot(num){ return Math.sqrt(parseFloat(num)); }
function invertor(num){ return -parseFloat(num); }
function remainder(num1, num2){ return parseFloat(num1) % parseFloat(num2); }

function operate(operator, num1, num2){
    if(operator === add) return add(num1, num2);
    if(operator === sub) return sub(num1, num2);
    if(operator === multiply) return multiply(num1, num2);
    if(operator === divide) return divide(num1, num2);
    if(operator === remainder) return remainder(num1, num2);
    if(operator === inverse) return inverse(num1);
    if(operator === square) return square(num1);
    if(operator === squareRoot) return squareRoot(num1);
    if(operator === invertor) return invertor(num1);
}

const populator = function(){
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");
    const syncScroller = document.querySelector(".scroll-sync");
    const container = document.querySelector(".calculator-container");
    const operatorDisplay = document.querySelector(".operator-display");

    const updateScroller = function(){
        syncScroller.textContent = display.textContent;
        if(display.textContent.length > 15){
            container.classList.add("show-scroller");
            setTimeout(() => {
                container.scrollLeft = container.scrollWidth - container.clientWidth;
            }, 10);
        } else {
            container.classList.remove("show-scroller");
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const val = button.textContent;

            if(!isNaN(val) || val === "."){
                display.textContent += val;
            } 
            else if(val === "+" || val === "-" || val === "×" || val === "÷" || val === "%"){
                if(num1 !== null && operator !== null && display.textContent !== ""){
                    num2 = display.textContent;
                    num1 = operate(operator, num1, num2);
                    display.textContent = num1;
                } else {
                    num1 = display.textContent;
                }

                operator = val === "+" ? add
                          : val === "-" ? sub
                          : val === "×" ? multiply
                          : val === "÷" ? divide
                          : remainder;

                operatorDisplay.textContent = val;
                display.textContent = "";
            }
            else if(val === "="){
                if(num1 !== null && operator !== null && display.textContent !== ""){
                    num2 = display.textContent;
                    display.textContent = operate(operator, num1, num2);
                    num1 = display.textContent;  // continue calculating
                    operator = null;
                    operatorDisplay.textContent = "";
                }
            }
            else if(val === "1/x") display.textContent = inverse(display.textContent);
            else if(val === "x²") display.textContent = square(display.textContent);
            else if(val === "√x") display.textContent = squareRoot(display.textContent);
            else if(val === "+/-") display.textContent = invertor(display.textContent);
            else if(val === "CE") display.textContent = "";
            else if(val === "⌫") display.textContent = display.textContent.slice(0, -1);
            else if(val === "C"){
                display.textContent = "";
                operatorDisplay.textContent = "";
                num1 = null;
                num2 = null;
                operator = null;
            }

            updateScroller();
        });
    });
}

let num1 = null;
let num2 = null;
let operator = null;

populator();
