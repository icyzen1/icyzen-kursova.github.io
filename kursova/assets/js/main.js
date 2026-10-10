const burgerToggle = document.getElementById("burgerToggle");
const mobileMenu = document.getElementById("mobileMenu");
const openBtn = document.getElementById("openBtnSignup");
const openBtnLogin = document.getElementById("openBtnLogin");
const closeBtnSignUp = document.getElementById("closeBtnSignUp")
const closeBtnLogin = document.getElementById("closeBtnLogin")
const modalWindowSignUp = document.getElementById("modalWindowSignUp")
const modalWindowLogin = document.getElementById("modalWindowLogin")
const openBtnSignupDesktop = document.getElementById("openBtnSignupDesktop")
const openBtnLoginDesktop = document.getElementById("openBtnLoginDesktop");
const openModalLoginFromSignUp = document.getElementById("openModalLoginFromSignUp")
const openModalSignUpFromLogin = document.getElementById("openModalSignUpFromLogin");

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