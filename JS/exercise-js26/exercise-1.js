function sum(...num) {
  let total = 0;

  for (let i in num) {
    total += num[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
