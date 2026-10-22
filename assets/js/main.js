const burgerToggle = document.getElementById("burgerToggle")
const mobileMenu = document.getElementById("mobileMenu")
const openBtn = document.getElementById("openBtnSignup")
const openBtnLogin = document.getElementById("openBtnLogin")
const closeBtnSignUp = document.getElementById("closeBtnSignUp")
const closeBtnLogin = document.getElementById("closeBtnLogin")
const modalWindowSignUp = document.getElementById("modalWindowSignUp")
const modalWindowLogin = document.getElementById("modalWindowLogin")
const openBtnSignupDesktop = document.getElementById("openBtnSignupDesktop")
const openBtnLoginDesktop = document.getElementById("openBtnLoginDesktop")
const openModalLoginFromSignUp = document.getElementById("openModalLoginFromSignUp")
const openModalSignUpFromLogin = document.getElementById("openModalSignUpFromLogin")
const productWrapper = document.querySelectorAll(".product-buttons-wrapper")
const testimonialWrapper = document.querySelectorAll(".testimonials-buttons-wrapper")

const options = {
    root: null,
    threshold: 0.05
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, options);

const elementsToAnimate = document.querySelectorAll(".animate-box, .animate-text");
elementsToAnimate.forEach(el => observer.observe(el));

burgerToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});

openBtn.addEventListener('click', function () {
    modalWindowSignUp.classList.add('active');
    mobileMenu.classList.remove('active');
});

closeBtnSignUp.addEventListener('click', function () {
    modalWindowSignUp.classList.remove('active');
});

openBtnLogin.addEventListener('click', function () {
    modalWindowLogin.classList.add('active');
    mobileMenu.classList.remove('active');
})

closeBtnLogin.addEventListener('click', function () {
    modalWindowLogin.classList.remove('active');
})

openModalLoginFromSignUp.addEventListener('click', function () {
    modalWindowLogin.classList.add('active');
    modalWindowSignUp.classList.remove('active');
})

openModalSignUpFromLogin.addEventListener('click', function () {
    modalWindowSignUp.classList.add('active');
    modalWindowLogin.classList.remove('active');
})

openBtnSignupDesktop.addEventListener('click', function () {
    modalWindowSignUp.classList.add('active');
})

openBtnLoginDesktop.addEventListener('click', function () {
    modalWindowLogin.classList.add('active');
})

modalWindowLogin.addEventListener("click", (event) => {
    if (event.target === modalWindowLogin) {
        modalWindowLogin.classList.remove('active');
    }
});

modalWindowSignUp.addEventListener("click", (event) => {
    if (event.target === modalWindowSignUp) {
        modalWindowSignUp.classList.remove('active');
    }
});


if (productWrapper) {
    const individualBtn = document.getElementById('prod-btn-individual');
    const businessBtn = document.getElementById('prod-btn-business');

    const individualContent = document.querySelector(".individual-content")
    const businessContent = document.querySelector(".business-content")

    if (individualBtn) {
        individualBtn.addEventListener("click", () => {
            individualBtn.classList.add("activebtn")
            businessBtn.classList.remove("activebtn")

            individualContent.classList.add("activecontent")
            businessContent.classList.remove("activecontent")
        })
    }

    if (businessBtn) {
        businessBtn.addEventListener("click", () => {
            businessBtn.classList.add("activebtn")
            individualBtn.classList.remove("activebtn")

            businessContent.classList.add("activecontent")
            individualContent.classList.remove("activecontent")
        })
    }
}

if (testimonialWrapper) {
    const testimonialIndividualBtn = document.getElementById('test-btn-individual');
    const testimonialBusinessBtn = document.getElementById('test-btn-business');

    const reviewIndividual = document.querySelector(".review-individual")
    const reviewBusiness = document.querySelector(".review-business")

    if (testimonialIndividualBtn) {
        testimonialIndividualBtn.addEventListener("click", () => {
            testimonialIndividualBtn.classList.add("activebtn")
            testimonialBusinessBtn.classList.remove("activebtn")

            reviewIndividual.classList.add("activereview")
            reviewBusiness.classList.remove("activereview")
        })
    }

    if (testimonialBusinessBtn) {
        testimonialBusinessBtn.addEventListener("click", () => {
            testimonialBusinessBtn.classList.add("activebtn")
            testimonialIndividualBtn.classList.remove("activebtn")

            reviewBusiness.classList.add("activereview")
            reviewIndividual.classList.remove("activereview")
        })
    }
}