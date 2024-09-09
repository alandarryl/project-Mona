
let nav = document.getElementById("navbar-content");

function openNav(){
    nav.classList.add("show");
    // console.log("open nav");
}

function closeNav(){
    nav.classList.remove("show");
    // console.log("close nav");
}








// document.addEventListener('DOMContentLoaded', function() {
//     let currentIndex = 0;
//     const slides = document.querySelectorAll('.banner-items');
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? 'block' : 'none';
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         showSlide(currentIndex);
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         showSlide(currentIndex);
//     }

//     // Initialize the first slide
//     showSlide(currentIndex);

//     // Attach event listeners to buttons
//     document.querySelector('.next').addEventListener('click', nextSlide);
//     document.querySelector('.prev').addEventListener('click', prevSlide);

//     // Optionally, auto-slide every 5 seconds
//     setInterval(nextSlide, 5000);
// });


let currentIndex = 0;
const bannerItems = document.querySelector('.banner-items');
const totalItems = document.querySelectorAll('.banner-item').length;

function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0; // Go back to the first slide
    } else if (index < 0) {
        currentIndex = totalItems - 1; // Go to the last slide
    } else {
        currentIndex = index;
    }
    // Move the banner-items container to show the correct slide
    bannerItems.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function next() {
    showSlide(currentIndex + 1);
}

function previous() {
    showSlide(currentIndex - 1);
}






