document.addEventListener("DOMContentLoaded", function () {
    // Add to Cart Functionality
    let cart = [];
    document.querySelectorAll(".fa-cart-shopping").forEach((cartIcon, index) => {
        cartIcon.addEventListener("click", function () {
            let productCard = this.closest(".card");
            let productName = productCard.querySelector("h3").innerText;
            let productPrice = parseFloat(productCard.querySelector("h2").innerText.replace("$", ""));
            
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} added to cart!`);
            updateCartTotal();
        });
    });
    
    function updateCartTotal() {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        console.log("Cart Total: $", total.toFixed(2));
    }
    
    // Live Search Functionality
    document.querySelector("#search input").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        document.querySelectorAll(".card").forEach(card => {
            let productName = card.querySelector("h3").innerText.toLowerCase();
            card.style.display = productName.includes(filter) ? "block" : "none";
        });
    });
    
    // Newsletter Subscription Validation
    document.querySelector("#subscribe").addEventListener("click", function () {
        let emailInput = document.querySelector("#newslater input").value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
        }
    });
    
    // Smooth Scroll to Top
    document.querySelector(".arrow").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    // Fix Dropdown Menu Behavior
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });
        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").classList.remove("show");
        });
    });
});
