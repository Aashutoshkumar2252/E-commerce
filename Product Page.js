document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id == productId);
      if (!product) return;

      document.getElementById("product-img").src = product.image;
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-description").textContent = product.description;
      document.getElementById("product-price").textContent = product.price;
    });
});
