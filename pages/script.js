
// navigation bar


let nav = document.getElementById("navbar-content");

function openNav(){
    nav.classList.add("show");
    // console.log("open nav");
}

function closeNav(){
    nav.classList.remove("show");
    // console.log("close nav");
}


// banner slider 

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






