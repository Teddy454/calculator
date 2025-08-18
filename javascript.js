document.addEventListener("DOMContentLoaded", () => {
    const displayDiv = document.querySelector("#display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const equalsButton = document.querySelector("#equals");
    const clearButton = document.querySelector("#clear");
    const decimalButton = document.createElement("button");

    decimalButton.textContent = ".";
    decimalButton.classList.add("decimal");
    document.querySelector("#buttons").appendChild(decimalButton);

    let firstOperand = "";
    let secondOperand = "";
    let currentOperator = null;

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentOperator === null) {
                firstOperand += button.textContent;
                displayDiv.textContent = firstOperand;
            } else {
                secondOperand += button.textContent;
                displayDiv.textContent = secondOperand;
            }
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (firstOperand !== "") {
                currentOperator = button.textContent;
                displayDiv.textContent = currentOperator;
            }
        });
    });

    equalsButton.addEventListener("click", () => {
        if (firstOperand !== "" && secondOperand !== "" && currentOperator !== null) {
            const result = calculate(Number(firstOperand), currentOperator, Number(secondOperand));
            displayDiv.textContent = result;
            firstOperand = result.toString();
            secondOperand = "";
            currentOperator = null;
        }
    });

    clearButton.addEventListener("click", () => {
        firstOperand = "";
        secondOperand = "";
        currentOperator = null;
        displayDiv.textContent = "0";
    });

    decimalButton.addEventListener("click", () => {
        if (currentOperator === null) {
            if (!firstOperand.includes(".")) {
                firstOperand += ".";
                displayDiv.textContent = firstOperand;
            }
        } else {
            if (!secondOperand.includes(".")) {
                secondOperand += ".";
                displayDiv.textContent = secondOperand;
            }
        }
    });

    function calculate(a, operator, b) {
        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return 0;
        }
    }
});