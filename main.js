const left = document.getElementById("left");
const right = document.getElementById("right");
let slide = document.getElementById("slide");

slide = ["img/image-slide-1.jpg", "img/image-slide-2.jpg", "img/image-slide-3.jpg", "img/image-slide-4.jpg", "img/image-slide-5.jpg", ];
let number = 3;

left.addEventListener('click', () => {
    console.log("left");
})

right.addEventListener('click', () => {
    console.log("right");
})