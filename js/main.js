import '../styles/style.scss'

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu__toggle');
    var menuBtn = document.querySelector('.menu__btn');
    var menuBox = document.querySelector('.menu__box');
    var closeBox = document.querySelector('.menu-item-close');

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
});

