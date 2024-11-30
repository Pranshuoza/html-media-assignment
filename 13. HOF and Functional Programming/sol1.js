function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Division by zero';
    }
}
 
console.log(calculate(10, 5, add)); 
console.log(calculate(10, 5, subtract));  
console.log(calculate(10, 5, multiply)); 
console.log(calculate(10, 5, divide)); 
