let hamburger = document.querySelector('#nav-svg');
let sideBar = document.querySelector('#sidebar');
let overlay = document.querySelector('#overlay')

hamburger.addEventListener('click', function() {
    sideBar.style.transform = 'translateX(250px)';
    overlay.classList.add('overlay');
})

overlay.addEventListener('click', function() {
    sideBar.style.transform = "translateX(0)";
    overlay.classList.remove('overlay');
})