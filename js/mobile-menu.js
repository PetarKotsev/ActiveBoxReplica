'use strinct';

(function () {
    let menuContainer = document.getElementById("mobileMenu");
    menuContainer.style.height = 0;
    let btn = document.getElementById("mobileMenuBtn");
    let isOpen = false;

    btn.onclick = function () {
        if (isOpen) {
            menuContainer.style.height = 0;
            menuContainer.style.opacity = 0;
            isOpen = false;
        } else {
            menuContainer.style.height = "auto";
            menuContainer.style.opacity = 1;
            isOpen = true;
        }
        
    }
}())