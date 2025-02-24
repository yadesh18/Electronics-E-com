document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Validation
    document.querySelector("#btnlogin a").addEventListener("click", function (e) {
        e.preventDefault();
        let name = document.querySelector("input[placeholder='Name']").value.trim();
        let username = document.querySelector("input[placeholder='User Name']").value.trim();
        let phone = document.querySelector("input[placeholder='Phone']").value.trim();
        let email = document.querySelector("input[placeholder='Email']").value.trim();
        let password = document.querySelector("input[placeholder='Password']").value.trim();

        if (name === "" || username === "" || phone === "" || email === "" || password === "") {
            alert("All fields are required.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert("Registration successful!");
        // You can redirect or process further
    });

    // Show/Hide Password Toggle
    let passwordField = document.querySelector("input[placeholder='Password']");
    let toggleButton = document.createElement("span");
    toggleButton.innerHTML = "&#128065;"; // Eye icon
    toggleButton.style.cursor = "pointer";
    toggleButton.style.marginLeft = "10px";
    passwordField.parentNode.insertBefore(toggleButton, passwordField.nextSibling);

    toggleButton.addEventListener("click", function () {
        passwordField.type = passwordField.type === "password" ? "text" : "password";
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
