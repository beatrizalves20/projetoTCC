

/**SLIDE DESTAQUE DO SITE */
var swiper = new Swiper(".msSlider", {
    spaceBetween: 30,
    centeredSlider: true,
    loop: true,
    autoplay:{
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});