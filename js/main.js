document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const headerNav = document.querySelector('.header-nav');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!headerNav.contains(event.target) && !burgerMenu.contains(event.target)) {
            burgerMenu.classList.remove('active');
            headerNav.classList.remove('active');
        }
    });

    // Close menu when clicking on a nav item
    const navItems = headerNav.querySelectorAll('.header-nav__item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            headerNav.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.header-nav__item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });


});