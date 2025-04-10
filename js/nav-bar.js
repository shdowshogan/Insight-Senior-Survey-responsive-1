

const close = document.querySelector('.close-button');
const logoElement = document.querySelector('.logo');
const navBar_column = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('disappear');
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('enlarged-links');
    logoElement.classList.toggle('disappear');
    navBar_column.classList.add('column-flex');
    navBar_column.classList.add('navBar-mobile');
    document.body.classList.add('lock-scroll');
    close.classList.toggle('show');
}

function closeMenu(){
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('disappear');
    navLinks.classList.remove('show');
    navBar_column.classList.remove('column-flex');
    logoElement.classList.toggle('disappear');
    navBar_column.classList.remove('navBar-mobile');
    navLinks.classList.remove('enlarged-links');
    document.body.classList.remove('lock-scroll');
    close.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('.close-button');
    
    if (navLinks.classList.contains('show')) {
        if (!event.target.closest('a') && 
            !event.target.closest('.hamburger') && 
            !event.target.closest('.close-button') && 
            !event.target.closest('.nav-links')) {
            closeMenu();
        }
    }
});
