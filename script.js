let barsIcon = document.querySelector(".bars-icon");
let cancelIcon = document.querySelector(".cancel-icon");
let mobilMenu = document.querySelector(".mobil-nav");

barsIcon.addEventListener("click", () => {
    mobilMenu.classList.toggle("active");
})

cancelIcon.addEventListener("click", () => {
    mobilMenu.classList.toggle("active");
})