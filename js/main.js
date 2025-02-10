const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}

let characterIndex = 0;

let titleNames = ["M", "Ma", "Mat", "Matt", "Matth", "Matthe", "Matthew","Matthew A","Matthew A.", "Matthew A. G", "Matthew A. Ga", "Matthew A. Gaf", "Matthew A. Gaff", "Matthew A. Gaffo", "Matthew A. Gaffoo", "Matthew A. Gaffoor", "Matthew A. Gaffoo", "Matthew A. Gaffo", "Matthew A. Gaff", "Matthew A. Gaf", "Matthew A. Ga", "Matthew A. G", "Matthew A.", "Matthew A", "Matthew", "Matthe", "Matth", "Matt", "Mat", "Ma"];

window.updateTitleName = function() {
    document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
}

setInterval(() => {
    window.updateTitleName()
}, 500);
