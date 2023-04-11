function multiplyByTwo(value) {
  let number = 2;
  let multiply = value;
  function inner() {
    const finalResult = multiply * number;
    console.log(finalResult);
  }
  return inner;
}

multiplyByTwo(4)();
