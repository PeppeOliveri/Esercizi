function printAsyncName(callback, name) {
  let int = setInterval(callback, 1000);
  setTimeout(() => clearInterval(int), 2000);

  let int2 = setInterval(() => {
    console.log(name);
  }, 2000);
  setTimeout(() => clearInterval(int2), 3000);
}

printAsyncName(() => console.log("Hello"), "Peppe");
