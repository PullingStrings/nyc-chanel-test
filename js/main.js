import '../styles/style.scss'

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('menu__toggle');
    let menuBtn = document.querySelector('.menu__btn');
    let menuBox = document.querySelector('.menu__box');
    let closeBox = document.querySelector('.menu-item-close');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            // Menu opened
             menuBtn.classList.add('open');
             menuBox.style.display = 'block';
        } else {
            // Menu closed
            menuBtn.classList.remove('open');
            menuBox.style.display = 'none';
        }
    });

    document.querySelector(".menu__item.introduction")

    document.querySelector(".menu__item.introduction").onclick = function() {
    document.getElementById('introduction').scrollIntoView({
        behavior: 'smooth'
    });

};

const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: "start", inline: "start" });
};

const menuItems = document.querySelectorAll('.menu__item');
const sectionMapping = {
    'introduction': 'introduction',
    'gabrielle_chanel': 'gabrielle_chanel',
    'the_iconic': 'the_iconic',
    'savoir_faire': 'savoir_faire',
    'the_necklace': 'the_necklace'
};

menuItems.forEach((listItem) => {
    let sectionTitles = listItem.innerText;
    listItem.addEventListener('click', (e) => {
        e.preventDefault();
        const classSuffix = listItem.classList[1];
        const sectionId = sectionMapping[classSuffix];

        if (sectionId) {
            document.querySelector(".nav-menu-icon > p").innerText = sectionTitles;
            goToSection(sectionId);
        }
    });
});

// const navMenuContainer = document.querySelector(".item-nav-menu-container");
// const chanelBanner = document.querySelector(".chanel-main-banner");
// const screenWidth = window.innerWidth;
//  window.addEventListener('scroll', function() {

//         // Get the distance from the top of the document to the element
//         const distanceFromTop = chanelBanner.getBoundingClientRect().top;

//         if (distanceFromTop >= 51 && screenWidth <= 768) {
//             // Element is at the top or above the top of the viewport
//             navMenuContainer.style.height = '300px';
//             document.querySelector(".nav-menu-icon > p").innerText = "Menu"

//         } else {
//             navMenuContainer.style.height = '46px';
//         }
//     });


});

