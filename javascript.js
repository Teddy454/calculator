const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener("click", () => {
    const firstNum = Number(document.querySelector("#firstNum").value);
    const operator = document.querySelector("#operator").value;
    const secondNum = Number(document.querySelector("#secondNum").value);

    const result = operate(firstNum, operator, secondNum);
    console.log(result);
});

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        return firstNum + secondNum;
    } else if (operator === "-") {
        return firstNum - secondNum;
    } else if (operator === "X") {
        return firstNum * secondNum;
    } else if (operator === "/") {
        return firstNum / secondNum;
    }
}
