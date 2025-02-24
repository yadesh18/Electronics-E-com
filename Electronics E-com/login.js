document.addEventListener("DOMContentLoaded", function () {
    // Login Validation
    document.querySelector("#btnlogin a").addEventListener("click", function (e) {
        e.preventDefault();
        let username = document.querySelector("input[type='name']").value.trim();
        let password = document.querySelector("input[type='password']").value.trim();
        
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
        } else {
            alert("Login successful!");
            // You can redirect the user or process login further
        }
    });

    // Show/Hide Password Toggle
    let passwordField = document.querySelector("input[type='password']");
    let toggleButton = document.createElement("span");
    toggleButton.innerHTML = "&#128065;"; // Eye icon
    toggleButton.style.cursor = "pointer";
    toggleButton.style.marginLeft = "10px";
    passwordField.parentNode.insertBefore(toggleButton, passwordField.nextSibling);

    toggleButton.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
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
});
