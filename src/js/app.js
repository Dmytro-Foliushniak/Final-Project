$(document).ready(function() {
    $('.burger, .cross').click(function() {
        $('.burger,.menu__container, span').toggleClass('active');
        $('body').toggleClass('lock')
    });

    $('.slider, .slider-mobile').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        speed: 1000
    });
    
$(function() {
    $('.tabs__btn').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');

        $('.tabs__btn').removeClass('active');
        $('.tabs__content').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');
    })
});
    

    $(function() {
        $('.first-view__scroll-btn').click (function() {
          $('html, body').animate({scrollTop: $('.tabs').offset().top }, 'slow');
          return false;
        });
      });


const openpopup = document.querySelector('.open-popup');
const closepopup = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');

openpopup.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
})

closepopup.addEventListener('click', () =>{
    popup.classList.remove('active');
})

});