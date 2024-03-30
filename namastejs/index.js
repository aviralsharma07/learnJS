const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    // proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentId) {
    console.log(paymentId);
    return paymentId;
  })
  .catch(function (err) {
    console.log(err);
    // showErrorMessage(err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // Create an Order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Invalid Cart");
      reject(err);
    }
    // Logic for creating order
    const orderId = "347";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    // Logic for payment
    // paymentId
    const paymentId = "123";
    if (paymentId) {
      resolve(paymentId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return cart.length > 0;
}
