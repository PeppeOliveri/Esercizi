const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// When we assign the object person1 to the variable person2
// we are creating another way to call person1, so basically
// person1 and person2 are the same thing, and when we modify
// someting in person2 the same thing will be modified in person1.
