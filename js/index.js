$(function () {
    let winWidth;
    $(window).resize(function() {
        winWidth = $(this).width();
        if(winWidth <= 1024) {
            $('.main-menu').off('mouseenter');
            $('.main-menu').off('mouseleave');
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }else {
            $('nav').appendTo('header');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter: function() {
                    $('.sub-menu, .sub-bg').stop().show();
                },
                mouseleave: function() {
                    $('.sub-menu, .sub-bg').stop().show();
                }
            })
        }
    }); //resize 이벤트 종료
    
    $(window).trigger('resize'); //강제 이벤트 발생.

    $('.menu-btn').click(function(event) {
        event.stopPropagation();    //부모까지 이벤트 전달이 안되도록 하는 메소드
        $('.index-wrap').css('filter','blur(10px)');
        $('body, html').css({
            height: '100vh',
            overflow: 'hidden'
        })
        $('.menu-area').show();
        $('.h-top').animate({
            right: '0%'
        },'fast')
    }); //태블릿, 모바일에 사용하는 메뉴 

    // sub-menu 클릭 메뉴
    $('.main-menu>li>a').click(function(event) {
        event.stopPropagation();
        $(this).siblings('.sub-menu').animate({
            left: '0%'
        }, 'fast')
    });
    $('.all>a').click(function(event) {
        event.stopPropagation();
        $(this).parents('.sub-menu').animate({
            left: '150%'
        }, 'fast')
    });

    //메뉴 외 화면 클릭시 메인 메뉴 숨김 작동
    $('.menu-area').click(function() {
        $('.index-wrap').css('filter','blur(0px)');
        $('body, html').css({
            height: 'auto',
            overflow: 'visible'
        })
        $('.h-top').animate({
            right: '-100%'
        },'fast', function() {
            $('.menu-area').hide();            
        })
    });

    if(winWidth <= 480) {
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-03-mobile.png');
    } else {
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-03 img').attr('src','images/M-03.png');
    }

    //swiper 플러그인
    let swiperSlide = new Swiper('.Featured-slide', {
        //모바일 기준
        slidesPerView: 'auto',
        spaceBetween: 8,
        pagination: {
            el: '.f-pager',
            clickable: true,
            type: 'fraction' //'fraction' 좌우 화살표, 'bullets' 원형 버튼
        },
        navigation: {
            prevEl: '.f-prev',
            nextEl: '.f-next'
        },
        //반응형(화면 넓이에 따라 레이아웃 변경)
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            480: {
                slidesPerView: 'auto',
                spaceBetween: 16
            }
        }
    })
})