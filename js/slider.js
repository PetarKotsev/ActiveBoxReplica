'use strict';

(function () {
    // Slider
    let slider = document.getElementById('slider');
    // Prime the slider
    slider.style.transform = `translateX(0vw)`;
    // Slider controller
    let sliderController = document.getElementById('sliderController');
    let currentIndex = 0;

    for (let i = 0; i < slider.childElementCount; i++) {
        if (i === 0) {
            sliderController.innerHTML = "<div class=\"controller__point controller__point--seclected\" data-index=" + i + "></div>";
        } else {
            sliderController.innerHTML += "<div class=\"controller__point\" data-index=\"" + i + "\"></div>";
        }
    }
    let pointArray = Array.from(sliderController.children);

    for (let index in pointArray) {
        pointArray[index].onclick = function () {
            slider.style.transform = `translateX(${pointArray[index].dataset.index* (-100)}vw)`;
            pointArray[currentIndex].classList.remove("controller__point--seclected");
            currentIndex = index;
            pointArray[index].classList.add("controller__point--seclected");
        }
    }
}())