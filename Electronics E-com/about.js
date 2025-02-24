document.addEventListener("DOMContentLoaded", function () {
    // Read More Toggle
    let readMoreBtn = document.querySelector("#about button");
    let extraText = document.querySelector("#about .col-md-7 p");
    let isExpanded = false;

    readMoreBtn.addEventListener("click", function () {
        if (isExpanded) {
            extraText.style.height = "100px";
            readMoreBtn.innerText = "Read More...";
        } else {
            extraText.style.height = "auto";
            readMoreBtn.innerText = "Read Less";
        }
        isExpanded = !isExpanded;
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

    // Dynamic Content Loading (Fade In on Scroll)
    let sections = document.querySelectorAll("#about, #offer");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Interactive Offer Section
    let offers = document.querySelectorAll("#offer .col-md-3");
    offers.forEach(offer => {
        offer.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        offer.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
