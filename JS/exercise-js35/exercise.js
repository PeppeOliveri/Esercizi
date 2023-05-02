function repeatHello(callback) {
  setInterval(callback, 1000);
}
let printThis = () => console.log("Hello");

repeatHello(printThis);

// The callback function is an arrow function because arrow functions have a shorter syntax and make the code more concise and readable.
