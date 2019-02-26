$(document).ready(function () {
    
    
    
    
    //HEADER SCROLL ANIMATION
    function headerScroll(){
        var scroll = $(window).scrollTop();
        if (scroll > 50){
//            $('header').addClass('header-scroll-bg');
            $('.navbar').addClass('py-0').removeClass('py-2');
            $('navbar-brand').addClass('header-scroll-height');
        }else{
//            $('header').removeClass('header-scroll-bg');
            $('.navbar').removeClass('py-0').addClass('py-2');
            $('navbar-brand').removeClass('header-scroll-height');
        }
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
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }
    
    
    
    headerScroll();
    animation();

    $(window).scroll(function () {
        headerScroll();
        animation();
    });
    
    
    
    
    







});//end document.ready


