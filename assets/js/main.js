(function ($) {
    "use strict"
    $( document ).ready(function() {

        if( $('#menu-mobile').length ){
            var menu_mobile = $('#menu-mobile .content-tray'),
            clone = '';

            if ( $('.header-center > .navbar').length ){
                clone = $('.header-center > .navbar').clone();
            }

            menu_mobile.append( clone );
        }

        if( $( '.close-notice' ).length ){
            $( '.close-notice' ).on( 'click', function(){
                $(this).parent('.header-container').remove();
            });
        }
        if( $( '.tab_container .nav-tab-item a' ).length ){
            $( '.tab_container .nav-tab-item a' ).on( 'click', function(){
                var attr = $(this).attr( 'href' );
                $(this).parent().parent().find('.nav-tab-item').removeClass('active');
                $(this).parent().addClass('active');
                $( `.tab .tab-inner`).removeClass('active');
                $( `.tab .tab-inner${attr}` ).addClass('active');
            });
        }

        if( $('.btn-traymenu').length ){
            var old_click;
            $('.btn-traymenu').on( 'click', function (e){
                e.preventDefault();
                old_click = $(this);
                var tray = $(this).attr( 'href' );
                if( $( `${tray}` ).hasClass('open') ){
                    $( `${tray}` ).removeClass( 'show-tray' );
                    setTimeout(function(){ $(`${tray}`).removeClass( 'open' ); }, 500);
                }else{
                    $( `${tray}` ).addClass( 'open show-tray' );
                }
            });
            $('.side-tray-menu .overlay, .header-tray .close').on( 'click', function(e){
                old_click.trigger('click');
            });
        }


        if( $('.header-center .dropdown').length ){
            var dropdown = $('.header-center .dropdown');
            dropdown.mouseout(function() {
                var item = $(this),
                    parent_width = item.parent().innerWidth(),
                    width_menu = item.innerWidth(),
                    width_dropdown = item.find(`.dropdown-content`).innerWidth(),
                    left = 0;
                if( width_dropdown < 300 ){
                    left = ( item.offset().left ) - ( width_dropdown / 2 );
                } else {
                    left = ( parent_width / 2 ) - ( width_dropdown / 2 );
                }

                item.find(`.dropdown-content`).css( 'left', left );
            });

            dropdown.each(function() {
                var item = $(this),
                    parent_width = item.parent().innerWidth(),
                    width_menu = item.innerWidth(),
                    width_dropdown = item.find(`.dropdown-content`).innerWidth(),
                    left = 0;
                if( width_dropdown < 300 ){
                    left = ( item.offset().left ) - ( width_dropdown / 2 );
                } else {
                    left = ( parent_width / 2 ) - ( width_dropdown / 2 );
                }

                item.find(`.dropdown-content`).css( 'left', left );
            });
        }

        if( $('.content-tray .dropdown').length ){
            $('.content-tray .dropdown').on( 'click', function(e){

                if( $(this).hasClass('active') ){
                    $(this).removeClass( 'active' );
                    $(this).find( '.dropdown-content' ).slideUp();
                }else{
                    $(this).addClass( 'active' );
                    $(this).find( '.dropdown-content' ).slideDown();
                }
            });
        }

        if( $( '.slick-product' ) ){
            $('.slick-product').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        if( $( '.slick-slider-area' ) ){
            $('.slick-slider-area').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }

        if( $( '.carousel-row-slider' ) ){
            $('.carousel-row-slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        if( $( '.instagram_slider' ) ){
            $('.instagram_slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        if( $( '.return-slider' ) ){
            $('.return-slider').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        if( $('.count-down-sale').length ){
            $('.count-down-sale').each(function (){
                $(this).append( `
                    <div>
                        <span class="days"></span>
                        <h4>DAYS</h4>
                    </div>
                    <div>
                        <span class="hours"></span>
                        <h4>HOURS</h4>
                    </div>
                    <div>
                        <span class="minutes"></span>
                        <h4>MINS</h4>
                    </div>
                    <div>
                        <span class="seconds"></span>
                        <h4>SECS</h4>
                    </div>
                ` );
                var html_day = $(this).find('.days'),
                html_hour = $(this).find('.hours'),
                html_minute = $(this).find('.minutes'),
                html_second = $(this).find('.seconds');
                var countDownDate = new Date().getTime() + (1000 * 60 * 60  * 24 * 90);
                var x = setInterval(function() {

                    var now = new Date().getTime();

                    var distance = countDownDate - now;

                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    html_day.html(days);
                    html_hour.html(hours);
                    html_minute.html(minutes);
                    html_second.html(seconds);
                    if (distance < 0) {
                        clearInterval(x);
                        $(this).html( "EXPIRED" );
                    }
                }, 1000);

            });
        }
    });
})(jQuery);