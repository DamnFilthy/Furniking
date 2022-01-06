import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

export default swiper;