function addToCart(name, price) {
  // Get the cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the item is already in the cart
  let foundIndex = -1;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === name) {
      foundIndex = i;
      break;
    }
  }

  // If the item is already in the cart, update its quantity
  if (foundIndex !== -1) {
    cartItems[foundIndex].quantity += 1;
  } else {
    // If the item is not in the cart, add it as a new item
    cartItems.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  // Save the updated cart items to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function clearCart() {
  // Clear the cart in local storage
  localStorage.setItem('cartItems', JSON.stringify([]));

   //Remove all rows from the table
  const cartItems = document.getElementById('cart-items');
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
}

