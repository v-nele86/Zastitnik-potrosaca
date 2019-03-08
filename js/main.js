$(document).ready(function () {
    
//********************************ANIMATION CODE********************************
    
    //HEADER SCROLL ANIMATION
    function headerScroll(){
        var scroll = $(window).scrollTop();
        if (scroll > 50){
            $('.navbar-brand').addClass('header-scroll-height');
        }else{
            $('.navbar-brand').removeClass('header-scroll-height');
        }
    }
    
    //IMAGE ZOOM CUSTOM ANIMATION
    if($('.zoom-holder').length > 0 && $('.zoom-to-get').length > 0){
        $('.zoom-holder').mouseenter(function(){
            $(this).find('.zoom-to-get').addClass('image-zoom');
        });
        $('.zoom-holder').mouseleave(function(){
            $(this).find('.zoom-to-get').removeClass('image-zoom');
        });
    }
        
    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color );
    });
        
    // EASE SCROLL
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
        
    //ANIMATION
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                $(this).css('animation-delay', delay);
            }
            //console.log(position);
        });
    }
    
    //HAMBURGER BUTTON ANIMATION
    function hamburger(){
        $('.hamburger').click(function(){
            $(this).toggleClass('is-active');
        });
    }
        
    
//***************************ANIMATION INITIALIZATION***************************

    headerScroll();
    animation();
    hamburger();

    $(window).scroll(function () {
        headerScroll();
        animation();
    });
    
    
    
        
});//end document.ready---------------------------------------------------------
