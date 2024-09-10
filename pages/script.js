
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
    cardImage.appendChild(image);








// second part of the card div, card content
    // create a card content div and append as a child of card



    // create a h2 element and append as child of card content



    // create a p element and append as of card content



    // create a button element and append as child of card content





});


