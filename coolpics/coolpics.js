
const images = document.querySelectorAll(".gallery-img");
const viewer = document.querySelector("#viewer");
const fullImage = document.querySelector("#full-image");
const closeButton = document.querySelector("#close-viewer");
const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

images.forEach((image) => {
    image.addEventListener("click", () => {
        fullImage.src = image.dataset.full;
        fullImage.alt = image.alt;
        viewer.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    viewer.style.display = "none";
    fullImage.src = "";
});

viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        viewer.style.display = "none";
        fullImage.src = "";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        viewer.style.display = "none";
        fullImage.src = "";
    }
});

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});
