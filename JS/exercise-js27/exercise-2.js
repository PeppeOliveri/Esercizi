const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const id = person.id;
const personInfo = {
  ...person,
};

console.log(id, personInfo);
