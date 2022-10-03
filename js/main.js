// Fixed Header On Scroll
let secondHeader = document.querySelector(".second-header");

window.addEventListener("scroll", function() {
    if (this.scrollY > 60) {
        secondHeader.classList.add("scrolled");
    }else {
        secondHeader.classList.remove("scrolled");
    }
})

let firstHeader = document.querySelector(".first-header");

window.addEventListener("scroll", function() {
    if (this.scrollY > 60) {
        firstHeader.classList.add("scrolled");
    }else {
        firstHeader.classList.remove("scrolled");
    }
})

// Navigations Bar
let navBar = document.querySelector(".fa-bars");
navBar.addEventListener("click", function() {
    navBar.classList.toggle("fa-bars");
    navBar.classList.toggle("fa-xmark");

    // Add Clicked Class To Display Nav Meny
    document.querySelector(".nav-menu").classList.toggle("clicked")
})

// Categories Menu
let catMenu = document.querySelector(".categories");
catMenu.addEventListener("click", function () {
    document.querySelector(".categories-menu").classList.toggle("clicked");
}) 

// Change Carousel Image
let imgsCarousel = ["carousel-1.jpg", "carousel-2.jpg", "carousel-3.jpg"];
let texts = ["Man Fashion", "Woman Fashion", "Kids Fashion"];

document.querySelectorAll(".bar li").forEach((li, i) => {
    li.addEventListener("click" ,function(e) {
        // Remove Active Class From All lis
        document.querySelectorAll(".bar li").forEach(ele => {
            ele.classList.remove("active");
        })
        // Add Active Class To Current li
        e.currentTarget.classList.add("active");

        // Change Image On click
        document.querySelector(".box-kids").style.backgroundImage = `url(img/${imgsCarousel[i]})`;

        // Change Text
        document .querySelector(".box-kids .text h2").innerHTML = texts[i];
    })

    // Automatically Change Image
    let index = 0;
    setInterval(function() {
        document.querySelector(".box-kids").style.backgroundImage = `url(img/${imgsCarousel[index]})`;

        index++;

        // Remove Active Class From All lis
        document.querySelectorAll(".bar li").forEach(ele => {
            ele.classList.remove("active");
        });

        // Add Active Class To Current Li
        document.querySelectorAll(".bar li")[index-1].classList.add("active");

        // Change Text
        document .querySelector(".box-kids .text h2").innerHTML = texts[index-1];

        if (index === 3) index = 0;
    },5000)
})

// Popup Box Image + Overlay
let showButtons = document.querySelectorAll(".gallerys .contents .image .show-image");
let images = document.querySelectorAll(".gallerys .contents .image img");

showButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        // Craete Overlay
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";

        // Append Overlay To Body
        document.body.appendChild(overlay);

        // Create Popup Box
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        // Append Popup Box To Body
        document.body.appendChild(popupBox);

        // Create Image Popup
        let imagePopup = document.createElement("img");
        imagePopup.src = images[index].src;

        // Append Image Popup To Popup Box
        popupBox.appendChild(imagePopup);

        // Create Close Span
        let closeButton = document.createElement("span");
        closeButton.className = "close-button"

        // Craete Text Node
        let closeText = document.createTextNode("X");
        closeButton.appendChild(closeText);

        // Append Close Span To Popup Box
        popupBox.appendChild(closeButton);

        
    })
})

document.addEventListener("click", (e) => {
    if (e.target.className === "close-button") {
        // Remove Popup Box
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
})

// Swiper Card Slider 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});