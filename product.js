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
