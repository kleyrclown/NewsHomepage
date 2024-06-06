document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header');
    const navbarHeight = navbar.offsetHeight;

    function navbarStick() {
        if (window.pageYOffset > navbarHeight) {
            navbar.classList.add('headerSticked')
        } else {
            navbar.classList.remove('headerSticked')
        }
    }

    window.addEventListener('scroll', navbarStick);
});