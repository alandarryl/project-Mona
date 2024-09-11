
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


// product list


let productList = [
    {
        id : '1',
        Image : '../assets/images/product1.jpg',
        title : 'products 1',
        description : 'this is product 1' 
    },
    {
        id : '2',
        Image : '../assets/images/product2.jpg',
        title : 'products 2',
        description : 'this is product 2'
    },
    {
        id : '3',
        Image : '../assets/images/product3.jpg',
        title : 'products 3',
        description : 'this is product 3'
    },
    {
        id : '4',
        Image : '../assets/images/product4.jpg',
        title : 'products 4',
        description : 'this is product 4'
    },
    {
        id : '5',
        Image : '../assets/images/product5.jpg',
        title : 'products 5',
        description : 'this is product 5'
    }
];

let products = document.getElementById('products');


productList.forEach(product => {
    

    // create the card div and append as a child the product cards div

    let card = document.createElement('div');
    card.className = 'card'
    products.appendChild(card);


// first part of the card div, card image
    // createa car-image div and append as a child the card div

    let cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);


    // create a image and append as a child of card image

    let image = document.createElement('img');
    image.src = product.Image;
    image.alt = "images no provided";
    cardImage.appendChild(image);




// second part of the card div, card content
    // create a card content div and append as a child of card

    let cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    card.appendChild(cardContent);


    // create a h2 element and append as child of card content

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = product.title;
    cardContent.appendChild(cardTitle);


    // create a p element and append as of card content

    let cardDescription = document.createElement('p');
    cardDescription.textContent = product.description;
    cardContent.appendChild(cardDescription);



    // create a button element and append as child of card content

    let cardButton = document.createElement('button');
    cardButton.textContent = 'Voir plus';
    cardButton.className="btn";
    // cardButton.addEventListener("click", displayPopup);
    cardContent.appendChild(cardButton);

    // function displayPopup() {
    //     console.log(product.description)
    // }



});


// make the popup apear and disappear


// image switcher for the popup 


// let thumbnails = document.querySelectorAll('.image-popup .sub-image');
let mainImage = document.querySelector('.main-image img');


// mainImage.forEach(thumbnail =>{
//     thumbnail.classList.remove('clicked');
// })


// JavaScript to switch images
function switchImage(thumbnail) {
    // Get the source of the clicked thumbnail image
    const newMainImageSrc = thumbnail.src;
    
    // Update the main image's source to the clicked thumbnail's source
    mainImage.src = newMainImageSrc;
    
    // Remove the 'clicked' class from all thumbnails to remove the gray overlay
    const allThumbnails = document.querySelectorAll('.image-item img');
    allThumbnails.forEach(img => img.classList.remove('focused'));
    
    // Add the 'clicked' class to the clicked thumbnail for the gray overlay
    thumbnail.classList.add('focused');
}





