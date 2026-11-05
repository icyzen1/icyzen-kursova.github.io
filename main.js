const supabaseClient = window.supabase.createClient("https://mqkkaoyxafjnpxkhomzf.supabase.co", "sb_publishable_ZEvpt8Q5eLdM_Y-YR-0aFA_kgcmdb-C")

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
const btnOpenAccount1 = document.getElementById("openAccount1")
const btnOpenAccount2 = document.getElementById("openAccount2")


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

if (btnOpenAccount1) {
    btnOpenAccount1.addEventListener("click", () => {
        modalWindowSignUp.classList.add("active")
    })
}

if (btnOpenAccount2) {
    btnOpenAccount2.addEventListener("click", () => {
        modalWindowSignUp.classList.add("active")
    })
}

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

const regSubmitBtn = document.getElementById("regSubmitBtn")
const loginSubmitBtn = document.getElementById("loginSubmitBtn")

if (regSubmitBtn) {
    regSubmitBtn.addEventListener("click", async () => {
        const firstName = document.getElementById("reg-firstname").value.trim()
        const lastName = document.getElementById("reg-lastname").value.trim()
        const email = document.getElementById("reg-email").value.trim()
        const password = document.getElementById("reg-password").value.trim()

        if (!firstName || !lastName || !email || !password) {
            alert("Поля не можуть бути пустими")
            return
        }

        try {
            const { data: authData, error: authError } = await supabaseClient.auth.signUp({
                email: email,
                password: password
            });

            if (authError) throw authError

            const userId = authData.user.id

            const { error: profileError } = await supabaseClient
                .from("profiles")
                .insert([
                    {
                        id: userId,
                        first_name: firstName,
                        last_name: lastName,
                        email: email
                    }
                ]);

            if (profileError) throw profileError

            alert("Реєстрація успішна")

            document.getElementById("reg-firstname").value = ""
            document.getElementById("reg-lastname").value = ""
            document.getElementById("reg-email").value = ""
            document.getElementById("reg-password").value = ""
        }
        catch (error) {
            alert("Помилка: " + error.message)
        }
    })
}

const navbarActions = document.getElementById("navbarActions")
const accountLogo = document.getElementById("accountLogo")
const accountLogoMobile = document.getElementById("accountLogoMobile")

if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener("click", async () => {
        const email = document.getElementById("login-email").value.trim()
        const password = document.getElementById("login-password").value.trim()

        if (!email || !password) {
            alert("Поля не можуть бути пустими")
        }

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            })

            if (error) {
                throw error
            }
            else {
                alert("Вхід успішний")
            }

            modalWindowLogin.classList.remove("active")
            navbarActions.style.display = "none"
            accountLogo.classList.add("show")

            /*мобільна верстка*/
            openBtn.style.display = "none"
            openBtnLogin.style.display = "none"
            accountLogoMobile.classList.add("show")

            /**кнопки забираються, додається аватарка, закривається модалка*/
            document.getElementById("login-email").value = ""
            document.getElementById("login-password").value = ""
        }
        catch (error) {
            alert("Помилка: " + error.message)
        }
    })
}

accountLogoMobile.addEventListener("click", () => {
    const logoutAccountMenu = document.getElementById("logoutMenuMobile")
    const logoutAccountMobileBtn = document.getElementById("logoutAccountMobile")
    logoutAccountMenu.classList.toggle("active")

    logoutAccountMobileBtn.addEventListener("click", async () => {
        const { error } = await supabaseClient.auth.signOut()

        if (error) {
            throw error
        }
        else {
            alert("Ви вийшли з аккаунта")
            logoutAccountMenu.classList.remove("active")
            mobileMenu.classList.remove("active")
            await checkAuthOnLoad()
        }
    })
})

accountLogo.addEventListener("click", () => {
    const logoutAccount = document.getElementById("logoutMenu")
    const logoutAccountBtn = document.getElementById("logoutAccount")
    logoutAccount.classList.toggle("active")

    logoutAccountBtn.addEventListener("click", async () => {
        const { error } = await supabaseClient.auth.signOut()

        if (error) {
            throw error
        }
        else {
            alert("Ви вийшли з аккаунта")
            logoutAccount.classList.remove("active")
            await checkAuthOnLoad()
        }
    })
})

supabaseClient.auth.onAuthStateChange((event, session) => {
    const isMobile = window.innerWidth <= 1024;

    if (session) {
        if (!isMobile && navbarActions) navbarActions.style.display = "none";
        if (!isMobile && openBtn) openBtn.style.display = "none";
        if (!isMobile && openBtnLogin) openBtnLogin.style.display = "none";
        
        if (accountLogo) accountLogo.classList.add("show");
        if (accountLogoMobile) accountLogoMobile.classList.add("show");
    } else {
        if (!isMobile && navbarActions) navbarActions.style.display = "block";
        if (!isMobile && openBtn) openBtn.style.display = "inline-block";
        if (!isMobile && openBtnLogin) openBtnLogin.style.display = "inline-block";

        if (accountLogo) accountLogo.classList.remove("show");
        if (accountLogoMobile) accountLogoMobile.classList.remove("show");
    }
});