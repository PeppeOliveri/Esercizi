function sumUntil(maxValue) {
  let somma = 0;
  for (let index = 0; index <= maxValue; index++) {
    somma += index;
  }
  return somma;
}

console.log(sumUntil(5));
