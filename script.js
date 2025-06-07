document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(item => item.id === id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  });
});