const number = 20;

let myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    return resolve(number);
  } else {
    return reject(number);
  }
});

myPromise
  .then((val) => console.log(val))
  .catch((err) => console.log("Error, the number is smaller than 10"));
