/**
 * PART 1
 */

// Declare a global counter variable.
let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
function recursiveFunction() {
  counter++;
  // recursiveFunction();
}

try {
  recursiveFunction();
} catch (error) {
  console.error(error);
  console.log(`Call stack size exceeded at counter value: ${counter}`);
}

// incrementCounter();

/**
 * PART 2
 */

// Write a recursive function that completely flattens an array of nested arrays, 
// regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.
function flatten(arr) {
    let result = arr.flat(Infinity);
    return result;
  }
  
  function trampoline(input) {
    while (typeof input === 'function') {
      input = input();
    }
    return input;
  }

const arr = [1, 2, [3, 4, [5, 6]], 7];
const result = trampoline(flatten(arr));
// console.log(result); // [1, 2, 3, 4, 5, 6, 7]

/**
 * PART 3
 */

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
const textElement = document.getElementById("text");

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your 
// HTML element.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function addPrimeNumbers(n, callback) {
    if (n <= 1) {
      callback();
    } else {
      if (isPrime(n)) {
        textElement.innerText += n + ', ';
      }
      setTimeout(() => {
        addPrimeNumbers(n - 1, callback);
      }, 0);
    }
  }
  
  function calculatePrimeNumbers(n) {
    textElement.innerText = '';
    addPrimeNumbers(n, () => {
      alert('Calculation finished!');
    });
  }
  
  // Call the function with n = 10,000
  calculatePrimeNumbers(100); // for testing
  // calclulatePrimeNumbers(10000);