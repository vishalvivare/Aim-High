// A closure allows a function to access variables from an outer scope even after the outer function has returned.

function outer() {
    let counter = 0;
  
    function inner() {
      counter++;
      console.log(counter);
    }
  
    return inner;
  }
  
  const increment = outer(); // outer runs and returns inner
  
  increment(); // 1
  increment(); // 2
  increment(); // 3

  
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i); // prints 3, 3, 3
    }, 1000);
  }
  
  for (var i = 0; i < 3; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j); // prints 0, 1, 2
      }, 1000);
    })(i);
  }