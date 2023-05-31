var swiper = new Swiper('.bg_slider_thumbs', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper('.bg_slider', {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.querySelector('.nav_menu_btn');
const closeBtn = document.querySelector('.nav_close_btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
});