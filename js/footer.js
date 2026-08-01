
/*====================================
        PREMIUM FOOTER JS
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*============================
            Back To Top
    ============================*/

    const backTop = document.getElementById("backTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backTop.classList.add("active");

        } else {

            backTop.classList.remove("active");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /*============================
        Footer Reveal Animation
    ============================*/

    const footerItems = document.querySelectorAll(".footer-col");

    const revealFooter = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    footerItems.forEach(item => {

        revealFooter.observe(item);

    });


    /*============================
        Magnetic Social Icons
    ============================*/

    document.querySelectorAll(".footer-social a").forEach(icon => {

        icon.addEventListener("mousemove", (e) => {

            const rect = icon.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;

            const y = e.clientY - rect.top - rect.height / 2;

            icon.style.transform =
                `translate(${x * 0.25}px, ${y * 0.25}px)`;

        });

        icon.addEventListener("mouseleave", () => {

            icon.style.transform = "";

        });

    });


    /*============================
        Smooth Anchor Scroll
    ============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });


    /*============================
        Footer Parallax Glow
    ============================*/

    const glow = document.querySelector(".cta-glow");

    if (glow) {

        window.addEventListener("mousemove", (e) => {

            let x = (e.clientX / window.innerWidth - 0.5) * 30;
            let y = (e.clientY / window.innerHeight - 0.5) * 30;

            glow.style.transform =
                `translate(calc(-50% + ${x}px), ${y}px)`;

        });

    }


    /*============================
        Current Year
    ============================*/

    const year = document.querySelector(".footer-bottom span.year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
