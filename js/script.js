function updateDisplay(value) {
    let currentValue = document.getElementById('display').value;

    // Check if the last character in the current value is an operator
    const lastCharIsOperator = ['+', '-', '*', '/', '.'].includes(currentValue.slice(-1));

    // Check if the current value is '0' and the entered value is an operator
    if (currentValue === '0') {
        if (['+', '-', '*', '/', '.'].includes(value)) {
            document.getElementById('display').value = '0' + value;
        }else{
            document.getElementById('display').value = value;
        }
    } else if (lastCharIsOperator && ['+', '-', '*', '/', '.'].includes(value)) {
        // If the last character is an operator and the entered value is an operator, do nothing
        return;
    } else {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    // Clear the input display and set it to '0'
    document.getElementById('display').value = '0';
}


function calculate() {
    try {
        // Get the current expression in the display
        let expression = document.getElementById('display').value;

        // Evaluate the expression using JavaScript eval function
        let result = eval(expression);

        // Update the display with the result
        document.getElementById('display').value = result;
    }
    catch(err) {
        document.getElementById('display').value = "Invalid Input";
    }
}