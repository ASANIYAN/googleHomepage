let hamburger = document.querySelector('#nav-svg');
let sideBar = document.querySelector('#sidebar');
let overlay = document.querySelector('#overlay');
let svg = document.querySelector('#svg');
let extra = document.querySelector('#extras');
let body = document.querySelector('#body');

hamburger.addEventListener('click', function() {
    sideBar.style.transform = 'translateX(250px)';
    overlay.classList.add('overlay');
})

overlay.addEventListener('click', function() {
    sideBar.style.transform = "translateX(0)";
    overlay.classList.remove('overlay');
})

svg.addEventListener('click', function() {
    extra.classList.remove('visibility');
})

body.addEventListener('click', function(e) {
    if (e.target.classList.contains('svg')) {
        extra.classList.remove('visibility');
    } else {
        extra.classList.add('visibility')
    }
})

