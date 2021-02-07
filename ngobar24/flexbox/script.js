const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


let iAm;
let yourOnly = 1;
if (iAm != yourOnly) {
    console.log("I don't want to be your number " + yourOnly++);
}