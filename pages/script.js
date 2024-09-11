
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


// // trial

// // product list
// let productList = [
//     {
//         id : '1',
//         Image : '../assets/images/product1.jpg',
//         title : 'products 1',
//         description : 'this is product 1',
//         subImages: [ // Add sub-images if available
//             '../assets/images/product1.jpg',
//             '../assets/images/product2.jpg',
//             '../assets/images/product3.jpg'
//         ]
//     },
//     {
//         id : '2',
//         Image : '../assets/images/product2.jpg',
//         title : 'products 2',
//         description : 'this is product 2',
//         subImages: [] // No sub-images
//     },
//     {
//         id : '3',
//         Image : '../assets/images/product3.jpg',
//         title : 'products 3',
//         description : 'this is product 3',
//         subImages: [ // Add sub-images if available
//             '../assets/images/product1.jpg',
//             '../assets/images/product2.jpg'
//         ]
//     },
//     // ... other products
// ];

// let products = document.getElementById('products');

// // make the popup appear and disappear
// const popup = document.getElementById('product-popup');
// let popupTitle = document.querySelector('.popup-content h2');
// let popupDescription = document.querySelector('.popup-content p');
// let popupImage = document.querySelector('.main-image img');
// let subImageContainer = document.querySelector('.sub-image');

// // Function to populate and show the popup
// function showPopup(product) {
//     popupTitle.textContent = product.title;
//     popupDescription.textContent = product.description;
//     popupImage.src = product.Image;

//     // Clear existing sub-images
//     subImageContainer.innerHTML = '';

//     if (product.subImages.length > 0) {
//         // Show sub-images
//         product.subImages.forEach(subImage => {
//             let imageItem = document.createElement('div');
//             imageItem.className = 'image-item';
//             let img = document.createElement('img');
//             img.src = subImage;
//             img.alt = 'Thumbnails';
//             img.onclick = () => switchImage(img);
//             imageItem.appendChild(img);
//             subImageContainer.appendChild(imageItem);
//         });
//     } else {
//         // No sub-images available
//         subImageContainer.innerHTML = '<div class="empty-subimage">No images available</div>';
//     }

//     // Show the popup
//     popup.classList.add('appear');
// }

// // Function to hide the popup
// function closePopup() {
//     popup.classList.remove('appear');
// }

// // Function to switch the main image
// function switchImage(img) {
//     popupImage.src = img.src;
//     // Handle fading out and in
//     popupImage.classList.add('fade-out');
//     setTimeout(() => {
//         popupImage.classList.remove('fade-out');
//     }, 400);
// }

// // Create product cards
// productList.forEach(product => {
//     let card = document.createElement('div');
//     card.className = 'card';
//     products.appendChild(card);

//     let cardImage = document.createElement('div');
//     cardImage.className = 'card-image';
//     card.appendChild(cardImage);

//     let image = document.createElement('img');
//     image.src = product.Image;
//     image.alt = "images not provided";
//     cardImage.appendChild(image);

//     let cardContent = document.createElement('div');
//     cardContent.className = 'card-content';
//     card.appendChild(cardContent);

//     let cardTitle = document.createElement('h2');
//     cardTitle.textContent = product.title;
//     cardContent.appendChild(cardTitle);

//     let cardDescription = document.createElement('p');
//     cardDescription.textContent = product.description;
//     cardContent.appendChild(cardDescription);

//     let cardButton = document.createElement('button');
//     cardButton.textContent = 'Voir plus';
//     cardButton.className = "btn";
//     cardButton.addEventListener("click", () => showPopup(product));

//     cardContent.appendChild(cardButton);
// });



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

// make the popup apear and disappear
const popup = document.getElementById('product-popup');
let popupTitle = document.querySelector('.popup-content h2');




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
    // cardButton.addEventListener("click", togglePopup);
    cardButton.addEventListener("click",
        function togglePopup() {
    
            // Toggle the 'appear' class to show or hide the popup
            if (popup.classList.contains('appear')) {
                popup.classList.remove('appear'); // Fade out
                popupTitle.innerHTML = "yuri";
            } else {
                popup.classList.add('appear'); // Fade in
            }
        }
    );
    cardContent.appendChild(cardButton);

    // function displayPopup() {
    //     console.log(product.description)
    // }



});




// function togglePopup() {
    
//     // Toggle the 'appear' class to show or hide the popup
//     if (popup.classList.contains('appear')) {
//         popup.classList.remove('appear'); // Fade out
//     } else {
//         popup.classList.add('appear'); // Fade in
//     }
// }

function closePopup(){
    popup.classList.remove('appear');
}



// image switcher for the popup 


// let thumbnails = document.querySelectorAll('.image-popup .sub-image');
let mainImage = document.querySelector('.main-image img');


// mainImage.forEach(thumbnail =>{
//     thumbnail.classList.remove('clicked');
// })


// // JavaScript to switch images
// function switchImage(thumbnail) {
//     // Get the source of the clicked thumbnail image
//     const newMainImageSrc = thumbnail.src;
    
//     // Update the main image's source to the clicked thumbnail's source
//     mainImage.src = newMainImageSrc;
    
//     // Remove the 'clicked' class from all thumbnails to remove the gray overlay
//     const allThumbnails = document.querySelectorAll('.image-item img');
//     allThumbnails.forEach(img => img.classList.remove('focused'));
    
//     // Add the 'clicked' class to the clicked thumbnail for the gray overlay
//     thumbnail.classList.add('focused');
// }



// second try


function switchImage(thumbnail) {
    // Add fade-out class to the main image
    mainImage.classList.add('fade-out');

    // After the fade-out animation, change the image source
    setTimeout(() => {
        // Update the main image's source to the clicked thumbnail's source
        mainImage.src = thumbnail.src;

        // Remove the fade-out class and add fade-in effect
        mainImage.classList.remove('fade-out');
    }, 400); // This timeout should match the duration of the CSS transition (0.3s)

    // Remove the 'focused' class from all thumbnails
    const allThumbnails = document.querySelectorAll('.image-item img');
    allThumbnails.forEach(img => img.classList.remove('focused'));

    // Add the 'focused' class to the clicked thumbnail
    thumbnail.classList.add('focused');
}

// popup population


function showPopup(product) {
    popupTitle.textContent = product.title;
    popupDescription.textContent = product.description;
    popupImage.src = product.Image;
    
    // Show the popup
    popup.classList.add('appear');
}

