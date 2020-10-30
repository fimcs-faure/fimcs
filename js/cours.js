const body = document.querySelector('body');
const scrollDiv = document.querySelector('.scroll');

window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY/(body.clientHeight-window.innerHeight);
    let scrollPercent = Math.round(scroll*100);
    scrollDiv.style.width = scrollPercent+'%';
});