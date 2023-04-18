// Class definition
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
const io = new Person("Giuseppe", "Oliveri");
console.log(developer.firstName + " " + developer.lastName);
console.log(io.firstName + " " + io.lastName);
