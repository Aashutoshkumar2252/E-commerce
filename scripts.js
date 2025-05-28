// ----- Product Mock Data -----
const products = [
  { id: 1, name: "Air Max", price: "$120", image: "air-max.png" },
  { id: 2, name: "Ultraboost", price: "$140", image:"ultra-boost.png" },
  { id: 3, name: "RS-X", price: "$100", image: "RS-X.png" },
  { id: 4, name: "Classic", price: "$90", image: "classic.png" }
];

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Inject the product cards into the product grid (catalog)
  const productGrid = document.querySelector(".product-grid");
  if (productGrid) {
    products.forEach(product => {
      let productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productGrid.appendChild(productCard);
    });
  }

  // Safely attach event listener to a hero button (if one exists)
  const shopNowButton = document.querySelector(".hero button");
  if (shopNowButton) {
    shopNowButton.addEventListener("click", () => {
      alert("Redirecting to Shop Page...");
      window.location.href = "#products"; // Scrolls to the products section
    });
  }
});

// ----- Add to Cart Functionality -----
function addToCart(productId) {
  const allProducts = [...products, ...newArrivals, ...recommendedProducts];
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    alert(`${product.name} has been added to your cart!`);
  }
}

// ----- New Arrivals Mock Data -----
const newArrivals = [
  { id: 5, name: "Urban Racer", price: "$110", image: "urban-racer.png" },
  { id: 6, name: "Swift Glide", price: "$130", image: "swift-glide.png" },
  { id: 7, name: "Metro Flex", price: "$120", image: "metro-flex.png" }
];

// ----- Recommended Products Mock Data -----
const recommendedProducts = [
  { id: 8, name: "Air Comfort Max", price: "$100", image: "air-comfort.png" },
  { id: 9, name: "Pulse Sneakers", price: "$140", image: "pulse-sneakers.png" },
  { id: 10, name: "Stride Runner", price: "$125", image: "stride-runner.png" }
];

// ----- Function to Render Product Cards -----
function renderProducts(products, containerSelector) {
  const productGrid = document.querySelector(containerSelector);
  if (productGrid) {
    products.forEach(product => {
      let productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productGrid.appendChild(productCard);
    });
  }
}

// ----- DOMContentLoaded: Load Products on Page Load -----
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(newArrivals, ".new-arrivals .product-grid");
  renderProducts(recommendedProducts, ".recommendations .product-grid");
});