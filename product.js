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
          <a href="Product Page.html?id=${product.id}">
            <button>View Details</button>
          </a>
        `;
        grid.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading products:", error));
});