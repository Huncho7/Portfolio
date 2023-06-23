
const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('ul');

    hamburgerMenu.addEventListener('click', function () {
        console.log('the button was clicked');
      navLinks.classList.toggle('show');
    });