// Function to calculate the sum of two numbers from user input
function calculateSum() {
    // Get the value from the input field with ID 'num1' and convert it to a floating point number
    const num1 = parseFloat(document.getElementById('num1').value);
    
    // Get the value from the input field with ID 'num2' and convert it to a floating point number
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Get a reference to the HTML element with ID 'result' to display results or messages later
    const resultDiv = document.getElementById('result');

    // Check if either of the inputs (or both) are not valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        // If either input is not a valid number, display an error message
        resultDiv.textContent = "Please enter valid numbers.";
        // Exit the function early since we don't want to continue if the inputs are invalid
        return;
    }

    // Calculate the sum of the two numbers
    const sum = num1 + num2;
    
    // Display the result in the 'result' element
    resultDiv.textContent = `The sum is: ${sum}`;
}

function calculateQuotient() {
    // Get the value from the input field with ID 'num1' and convert it to a floating point number
    const num1 = parseFloat(document.getElementById('num1').value);
    
    // Get the value from the input field with ID 'num2' and convert it to a floating point number
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Get a reference to the HTML element with ID 'result' to display results or messages later
    const resultDiv = document.getElementById('result');

    // Check if either of the inputs (or both) are not valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        // If either input is not a valid number, display an error message
        resultDiv.textContent = "Please enter valid numbers.";
        // Exit the function early since we don't want to continue if the inputs are invalid
        return;
    }

    // Calculate the sum of the two numbers
    const quot = num1 / num2;
    
    // Display the result in the 'result' element
    resultDiv.textContent = `The quotient is: ${quot}`;
}

function calculateProduct() {
    // Get the value from the input field with ID 'num1' and convert it to a floating point number
    const num1 = parseFloat(document.getElementById('num1').value);
    
    // Get the value from the input field with ID 'num2' and convert it to a floating point number
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Get a reference to the HTML element with ID 'result' to display results or messages later
    const resultDiv = document.getElementById('result');

    // Check if either of the inputs (or both) are not valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        // If either input is not a valid number, display an error message
        resultDiv.textContent = "Please enter valid numbers.";
        // Exit the function early since we don't want to continue if the inputs are invalid
        return;
    }

    // Calculate the sum of the two numbers
    const product = num1 *num2;
    
    // Display the result in the 'result' element
    resultDiv.textContent = `The product is: ${product}`;
}
function calculateDiff() {
    // Get the value from the input field with ID 'num1' and convert it to a floating point number
    const num1 = parseFloat(document.getElementById('num1').value);
    
    // Get the value from the input field with ID 'num2' and convert it to a floating point number
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Get a reference to the HTML element with ID 'result' to display results or messages later
    const resultDiv = document.getElementById('result');

    // Check if either of the inputs (or both) are not valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        // If either input is not a valid number, display an error message
        resultDiv.textContent = "Please enter valid numbers.";
        // Exit the function early since we don't want to continue if the inputs are invalid
        return;
    }

    // Calculate the sum of the two numbers
    const diff = num1 -num2;
    
    // Display the result in the 'result' element
    resultDiv.textContent = `The difference is: ${diff}`;
}
