const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storage(val) {
  localStorage.setItem("val", JSON.stringify(val));
}

function printVal() {
  let res = localStorage.getItem("val");
  let user = JSON.parse(res);
  return user;
}

storage(user);
console.log(printVal());
