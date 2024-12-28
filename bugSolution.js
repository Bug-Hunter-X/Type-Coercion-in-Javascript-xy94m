function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Invalid input: Both arguments must be numbers";
  }
}
console.log(foo(1, 1)); // Output: 2
console.log(foo(1, "1")); // Output: Invalid input: Both arguments must be numbers

//Alternative solution using parseInt
function foo2(a,b){    return parseInt(a) + parseInt(b);}
console.log(foo2(1, "1")); // Output: 2