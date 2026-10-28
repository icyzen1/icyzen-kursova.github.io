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

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("vacancyInput")
    const vacancyCard = document.querySelectorAll(".vacancy-card")

    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
        const searchText = event.target.value.toLowerCase().trim()

        vacancyCard.forEach(card => {
            const titleElem = card.querySelector(".vacancy-card-title")
            const departmentElem = card.querySelector(".vacancy-department")

            const titletext = titleElem ? titleElem.textContent.toLowerCase().trim() : ""
            const departmentText = departmentElem ? departmentElem.textContent.toLowerCase().trim() : ""

            if (titletext.includes(searchText) || departmentText.includes(searchText)) {
                card.style.display = "";
            }
            else {
                card.style.display = "none";
            }
        })
    })
    }

    const faqBtn = document.querySelector(".faq-load");
    const faqList = document.querySelector(".faq-list");

    if (faqBtn && faqList) {
        faqBtn.addEventListener("click", async () => {
            try {
                const response = await fetch("dynamic.json")

                if (!response.ok) {
                    throw new Error(`Помилка завантаження файлу`)
                }

                const dataReviews = await response.json()

                const innerWrap = document.createElement("div");
                innerWrap.className = "faq-inner-wrap";

                dataReviews.forEach(review => {
                    const faqCard = document.createElement("div");
                    faqCard.className = "faq-card";
                    faqCard.style.maskImage = "none";

                    faqCard.innerHTML = `
                        <div class="faq-card-header">
                            <p class="faq-card-title">${review.title}</p>
                        </div>
                        <span class="faq-card-description">${review.desc}</span>
                    `;
                    
                    innerWrap.appendChild(faqCard);
                });

                faqList.appendChild(innerWrap);
                faqBtn.style.display = "none";

                const allCards = document.querySelectorAll(".faq-card")
                allCards.forEach(card => {
                    card.style.maskImage = "none";
                })

            } catch (error) {
                console.error("Помилка завантаження", error);
            }
        });
    }
})

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

const swiperIndividual = new Swiper(".mySwiperIndividual", {
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observerParents: true,
    navigation: {
        nextEl: ".review-swiper-next",
        prevEl: ".review-swiper-prev"
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

const swiperBusiness = new Swiper(".mySwiperBusiness", {
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observerParents: true,
    navigation: {
        nextEl: ".review-swiper-next",
        prevEl: ".review-swiper-prev"
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

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
            swiperIndividual.update()
        })
    }

    if (testimonialBusinessBtn) {
        testimonialBusinessBtn.addEventListener("click", () => {
            testimonialBusinessBtn.classList.add("activebtn")
            testimonialIndividualBtn.classList.remove("activebtn")

            reviewBusiness.classList.add("activereview")
            reviewIndividual.classList.remove("activereview")
            swiperBusiness.update()
        })
    }
}
