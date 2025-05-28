/*

document.addEventListener("DOMContentLoaded", () => {
    // Get Product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    // Fetch JSON Data
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                document.getElementById("product-img").src = product.image;
                document.getElementById("product-name").textContent = product.name;
                document.getElementById("product-description").textContent = product.description;
                document.getElementById("product-price").textContent = product.price;
            } else {
                document.querySelector(".product-info").innerHTML = "<h2>Product not found.</h2>";
            }
        })
        .catch(error => console.error("Error loading product data:", error));
});
*/


document.addEventListener("DOMContentLoaded", () => {
  fetch("products.json")
    .then(response => response.json())
    .then(products => {
      const grid = document.getElementById("product-grid");

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
          <a href="product.html?id=${product.id}">
            <button>View Details</button>
          </a>
        `;
        grid.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading products:", error));
});