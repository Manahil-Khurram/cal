import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter first number:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select operation:"
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("kindly enter valid number");
}
