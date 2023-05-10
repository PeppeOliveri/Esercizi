const isLogged = true;

function firstProm(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged == true) {
      let rand = Math.random();
      resolve(rand);
    } else {
      reject(new Error("Utente non connesso"));
    }
  });
}

const num = 3;

function secondProm(num) {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve(console.log(`{name: "John", age: 24}`));
    } else {
      reject(new Error("Utente non riconosciuto"));
    }
  });
}

firstProm(isLogged)
  .then((num) => secondProm(num))
  .catch((err) => console.log(err));
