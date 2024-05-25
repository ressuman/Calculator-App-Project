// Retrieve display element
let display = document.getElementById("display");
// Initialize expression string
let expression = "";
// Keep track of the last digit removed
let lastDigitRemoved = null;

// Memory storage
let memory = 0;

// Function to add the value of display to memory
function addToMemory() {
  memory += parseFloat(display.value);
}

// Function to subtract the value of display from memory
function subtractFromMemory() {
  memory -= parseFloat(display.value);
}

// Function to clear memory
function clearMemory() {
  memory = 0;
}

// Function to recall memory value and display it
function recallMemory() {
  display.value = memory.toString();
}

// Function to calculate percentage of the value in display
function calculatePercentage() {
  display.value = (parseFloat(display.value) / 100).toString();
}

// Function to append value to the expression
function appendValue(value) {
  expression += value;
  display.value = expression;
}

// Function to clear the last digit in display
function clearLastDigit() {
  // Get the last digit
  const lastDigit = display.value.slice(-1);
  // Remove the last digit from display
  display.value = display.value.slice(0, -1);
}

// Function to clear the display and expression
function clearDisplay() {
  expression = "";
  display.value = "";
}

// Function to evaluate and display the result
function calculate() {
  try {
    // Evaluate expression and display result
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    // Display error if evaluation fails
    display.value = "Error";
    expression = "";
  }
}
