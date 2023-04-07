const order = {
  customer: {
    address: {
      city: "",
    },
  },
};

if (!order.customer.address.city) {
  console.log("City is required");
}
