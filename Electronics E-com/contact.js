document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Validation
    document.querySelector(".messagebtn button").addEventListener("click", function (e) {
        e.preventDefault();
        let name = document.querySelector("input[placeholder='Name']").value.trim();
        let email = document.querySelector("input[placeholder='Email']").value.trim();
        let phone = document.querySelector("input[placeholder='Phone']").value.trim();
        let message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("All fields are required.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        if (message.length > 250) {
            alert("Message should not exceed 250 characters.");
            return;
        }

        alert("Message sent successfully!");
    });

    // Character Counter for Message
    let messageField = document.querySelector("textarea");
    let charCounter = document.createElement("p");
    charCounter.style.textAlign = "right";
    messageField.parentNode.appendChild(charCounter);
    
    messageField.addEventListener("input", function () {
        let remaining = 250 - messageField.value.length;
        charCounter.textContent = `${remaining} characters remaining`;
    });
    
    // Smooth Scroll to Top
    document.querySelector(".arrow").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
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
    
    // Copy Contact Info
    document.querySelectorAll(".card i").forEach((icon) => {
        icon.addEventListener("click", function () {
            let text = this.nextElementSibling.innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert(`${text} copied to clipboard!`);
            });
        });
    });
});
