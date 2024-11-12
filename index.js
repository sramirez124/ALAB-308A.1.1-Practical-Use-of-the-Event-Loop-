/**
 * PART 1
 */

// Declare a global counter variable.
let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
function recursiveFunction() {
  counter++;
  recursiveFunction();
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

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.



// Once your recursive function is complete, trampoline it.
