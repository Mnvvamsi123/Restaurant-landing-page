let cart = [];

function addToCart(name, price, btn) {
  const qtyInput = btn.previousElementSibling;
  const quantity = parseInt(qtyInput.value);

  if (!quantity || quantity < 1) return alert("Enter a valid quantity.");

  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    cartContainer.innerHTML += `<p>${item.name} × ${item.quantity} = ₹${itemTotal}</p>`;
  });

  totalEl.textContent = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you! Your order has been placed.");
  cart = [];
  renderCart();
}
