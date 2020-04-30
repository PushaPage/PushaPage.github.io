
window.addEventListener('load', function() {


    // HAMBURGER MENU
    let navbar = document.getElementById('Navbar'),
        toggler = navbar.querySelector('.navbar-toggler'),
        navcollapse = navbar.querySelector('.navbar-collapse');


    toggler.addEventListener('click', function (event) {          

            this.classList.toggle('open');

            navcollapse.classList.toggle('show');
    });

});		