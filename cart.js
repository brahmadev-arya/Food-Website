// Global cart array to store items
let cart = [];

// Add item to the cart
function addToCart(itemName, itemPrice) {
  const existingItem = cart.find((item) => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if item already exists
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  alert(`${itemName} added to the cart!`);
  saveCartToLocalStorage();
}

// Save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  cart = storedCart ? JSON.parse(storedCart) : [];
}

// Display cart items in `cart.html`
function displayCartItems() {
  loadCartFromLocalStorage();
  const cartItemsDiv = document.getElementById("cart-items");
  const totalPriceSpan = document.getElementById("total-price");
  cartItemsDiv.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <p>${item.name} (₹${item.price} x ${item.quantity})</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
      totalPrice += item.price * item.quantity;
    });
  }

  totalPriceSpan.textContent = totalPrice;
}

// Remove item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToLocalStorage();
  displayCartItems();
}

// Handle payment form submission
function handlePaymentForm() {
  const paymentForm = document.getElementById("payment-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form refresh
    confirmationMessage.style.display = "block"; // Show confirmation message
    cart = []; // Clear the cart
    saveCartToLocalStorage();
  });
}

// Initialize the page based on context
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("cart.html")) {
    displayCartItems();
  } else if (window.location.pathname.endsWith("payment.html")) {
    handlePaymentForm();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
      const cartContainer = document.getElementById("cart-items");
      const totalPriceElement = document.getElementById("total-price");
      cartContainer.innerHTML = "";

      let total = 0;
      cart.forEach(item => {
          let cartItem = document.createElement("div");
          cartItem.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
          cartContainer.appendChild(cartItem);
          total += item.price;
      });

      totalPriceElement.textContent = `₹${total}`;
      localStorage.setItem("cartTotal", total);
  }

  updateCartDisplay();
});

