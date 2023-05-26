const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storage(val) {
  localStorage.setItem("val", JSON.stringify(val));
}
storage(user);
