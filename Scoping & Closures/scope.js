// Scope Types: JavaScript has three main types of scope: Global, Function, and Block scope.
// 1. Global Scope: Variables declared outside any function or block are in the global scope.
// 2. Function Scope: Variables declared within a function are in the function scope.
// 3. Block Scope: Variables declared with `let` or `const` inside a block (e.g., within `{}`) are in block scope.

// This is a global scope example
let globalVar = "I'm global!";
function printGlobal() {
    console.log(globalVar); // ✅ Works
}

printGlobal() // Output: I'm global!


// This is a local/functional scope example
function myFunc() {
    let insideFunc = "I'm inside!";clearInterval
    console.log(insideFunc); // ✅
}

console.log(insideFunc); // ❌ ReferenceError


// This is a block scope example
if (true) {
    let blockVar = "Only in this block";
    console.log(blockVar); // ✅
  }
  
  console.log(blockVar); // ❌ ReferenceError
  