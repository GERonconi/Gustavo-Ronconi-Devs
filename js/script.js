function cambiarIframe(url) {
    document.getElementById('iframe-marketing').src = url;
}

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.querySelector('nav#main-nav ul');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});