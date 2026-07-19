let barsIcon = document.querySelector(".bars-icon");
let cancelIcon = document.querySelector(".cancel-icon");
let mobilMenu = document.querySelector(".mobil-nav");

barsIcon.addEventListener("click", () => {
    mobilMenu.classList.toggle("active");
})

cancelIcon.addEventListener("click", () => {
    mobilMenu.classList.toggle("active");
})

let form = document.querySelector(".contact-form");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");

let nameError = document.querySelector(".name-error");
let emailError = document.querySelector(".email-error");
let messageError = document.querySelector(".message-error");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Ad və soyad daxil edin.";
        nameInput.classList.add("error-border");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Elektron poçt daxil edin.";
        emailInput.classList.add("error-border");
        isValid = false;
    }

    else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Düzgün email daxil edin.";
        emailInput.classList.add("error-border");
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Mesaj daxil edin.";
        messageInput.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        alert("Mesaj uğurla göndərildi!");
        form.reset();
    }
})


nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") {
        nameInput.classList.remove("error-border");
        nameError.textContent = "";
    }
});

emailInput.addEventListener("input", () => {
    if (emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.remove("error-border");
        emailError.textContent = "";
    }
});

messageInput.addEventListener("input", () => {
    if (messageInput.value.trim() !== "") {
        messageInput.classList.remove("error-border");
        messageError.textContent = "";
    }
});