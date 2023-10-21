//Creating class called Calculator
class Calculator {
    /**
     * defines constructor for Calculator class
     */
    constructor() {
        //initializes all display elements
        this.previousOperandElement = document.getElementById("previous-operand");
        this.currentOperandElement = document.getElementById("current-operand");
        this.display = document.getElementById("display");
        this.clearButton = document.getElementById("clear");
        this.signButton = document.getElementById("sign");
        this.percentButton = document.getElementById("percent");
        this.divideButton = document.getElementById("divide");
        this.sevenButton = document.getElementById("seven");
        this.eightButton = document.getElementById("eight");
        this.nineButton = document.getElementById("nine");
        this.multiplyButton = document.getElementById("multiply");
        this.fourButton = document.getElementById("four");
        this.fiveButton = document.getElementById("five");
        this.sixButton = document.getElementById("six");
        this.subtractButton = document.getElementById("subtract");
        this.oneButton = document.getElementById("one");
        this.twoButton = document.getElementById("two");
        this.threeButton = document.getElementById("three");
        this.addButton = document.getElementById("add");
        this.zeroButton = document.getElementById("zero");
        this.decimalButton = document.getElementById("decimal");
        this.equalsButton = document.getElementById("equals");

        //set default values for operands and operation
        this.currentOperand = "0";
        this.previousOperand = "";
        this.operation = undefined;

        //updates calculator display
        this.updateDisplay();
    }

    //Function that clears calculator
    clear() {
        this.currentOperand = "0";
        this.previousOperand = "";
        this.operation = undefined;
    }
    //method to delete last digit from current operand
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    //method to append new number to current operand
    appendNumber(number) {
        //check for duplicate decimals
        if (number === "." && this.currentOperand.includes(".")) return;
        //replace 0 with new number if current number is 0
        if (this.currentOperand === "0" && number !== ".") {
            this.currentOperand = number;
        } else {
            //append new number to current number
            this.currentOperand += number;
        }
    }

    chooseOpeartion(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";

        this.updateDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = "";
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;

        if(isNaN(integerDigits)){
            integerDisplay = "";
        }else{
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
            });
        }
        if(decimalDigits != null){
            return '${integerDisplay}.${decimalDigits}';
        }else{
            return integerDisplay;
        }
    }


    updateDisplay(){
        if(this.operation !== null){
            this.display.value = `'${this.getDisplayNumber(this.previousOperand)}${this.operation} ${this.currentOperand ? this.currentOperand : ''}`;
        }else{
            this.display.value = this.getDisplayNumber(this.currentOperand);
        }
    }
}

const calculator = new Calculator();

calculator.clearButton.addEventListener("click", () =>{
    calculator.clear();
})