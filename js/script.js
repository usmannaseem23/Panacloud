// $(document).ready(function(){
//     $('.slick-carousel').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1
//     });
// });

function toggleMenu() {
    const navLinks = document.querySelector('.navLinks');
    navLinks.classList.toggle('active');
}

// let currentIndex = 0;
// const items = document.querySelectorAll('.carousel-item');
// const dots = document.querySelectorAll('.dot');

// function showSlide(index) {
//     items.forEach((item, i) => {
//         item.classList.remove('active');
//         dots[i].classList.remove('active');
//         item.style.transform = `translateX(-${index * 100}%)`;
//     });
//     items[index].classList.add('active');
//     dots[index].classList.add('active');
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % items.length;
//     showSlide(currentIndex);
// }

// function currentSlide(index) {
//     currentIndex = index - 1;
//     showSlide(currentIndex);
// }

// // Automatic sliding
// setInterval(nextSlide, 1000);

// // Initialize the first slide
// showSlide(currentIndex);


// Example percentages for both outer and inner progress
let outerProgressPercentage = 30; // 80% for the outer circle
let innerProgressPercentage = 50; // 50% for the inner circle

// Convert percentages to degrees (0% -> 0 degrees, 100% -> 360 degrees)
let outerProgressValue = (outerProgressPercentage / 100) * 73;
let innerProgressValue = (innerProgressPercentage / 100) * 250;

// Set the CSS variables for rotation of outer and inner progress
document.documentElement.style.setProperty('--outer-progress', outerProgressValue);
document.documentElement.style.setProperty('--inner-progress', innerProgressValue);

 

