$(document).ready(function () {
    
    
    
    
    //HEADER SCROLL ANIMATION
    function headerScroll(){
        var scroll = $(window).scrollTop();
        if (scroll > 50){
            $('.navbar-brand').addClass('header-scroll-height');
        }else{
            $('.navbar-brand').removeClass('header-scroll-height');
        }
    }
    
    //IMAGE ZOOM ANIMATION
    if($('.zoom-holder').length > 0 && $('.zoom-to-get').length > 0){
        $('.zoom-holder').mouseenter(function(){
            $(this).find('.zoom-to-get').addClass('image-zoom');
        });
        $('.zoom-holder').mouseleave(function(){
            $(this).find('.zoom-to-get').removeClass('image-zoom');
        });
    }
    
            
    //BANNER SECTION
//    if($('.banner').length > 0){
//        $('.banner').find('.latest-item-content-pic').append('<div class="banner-pic-caption d-flex justify-content-between align-items-center"><span class="banner-pic-caption-time mr-2"><a href="#">10:34</a></span><span class="banner-pic-caption-newspaper text-uppercase mr-auto"><a href="#">POLITIKA</a></span><span class="banner-pic-caption-comments text-center"><a href="#"><img src="img/latest/banner_feedback.png" alt=""/></a><span class="banner-pic-caption-comments-number">12</span></span></div>');
//        $('.banner').find('.latest-item-content').prepend('<figure class="latest-item-content-pic"><a href="#" class="img-holder size-banner"><img src="img/latest/logo_informer.png" alt="Logo Informer"></a></figure>')
//
//    }
        
    
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
    
    function hamburger(){
        $('.hamburger').click(function(){
            $(this).toggleClass('is-active');
        });
    }
    
    
//    $(function () {
//        $(".single-news-form-item").validate({
//            highlight: function (element) {
//                $(element).closest('.form-group').addClass("has-danger");
//                $(element).addClass("form-control-danger");
//            },
//            unhighlight: function (element) {
//                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
//                $(element).removeClass('form-control-danger').addClass('form-control-success');
//            },
//            rules: {
//                name: {
//                    required: true
//                },
//                email:{
//                    required:true,
//                    email:true
//                }
//
//
//            },
//            messages: {
//                name: {
//                    required: "Polje *Ime je obavezno!"
//                },
//                email:{
//                    required: 'Polje *Email je obavezno!',
//                    email:'Molimo unesite validni Email!'
//                }
//
//            },
//            errorElement: 'p',
//            errorPlacement: function (error, element) {
//                error.appendTo($(element).closest('.form-group').find('.error-msg'));
//            }
//
//        });
//    });
    
    
    headerScroll();
    animation();
    hamburger();

    $(window).scroll(function () {
        headerScroll();
        animation();
    });
    
    
    
    
    







});//end document.ready


