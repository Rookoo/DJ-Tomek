
        $(document).ready(function() {

            $('#fullpage').fullpage({
                anchors: ['Dj Tomek', 'Oferta', 'O mnie', 'Referencje', 'FAQ', 'Kontakt'],
                navigation: true,
                slidesNavigation: true,
                navigationPosition: 'right',
                navigationTooltips: ['Dj Tomek', 'Oferta', 'O mnie', 'Referencje', 'FAQ', 'Kontakt'],
                responsiveWidth: 1023,
                afterResponsive: function(isResponsive){
                    
                }

            });

            var $toggleButton = $('#nav-icon1'),
                $menuWrap = $('.menu-wrap'),
                $scrollingDiv = $('#nav-icon1'),
                $slideArrowPrev = $('.slidesjs-previous'),
                $slideArrowNext = $('.slidesjs-next'),
                $bgArrowSlidePrev = $('.background-slidejs-prev'),
                $bgArrowSlideNext = $('.background-slidejs-next');



   $toggleButton.on('click', function() {
        $(this).toggleClass('open');
        $menuWrap.toggleClass('menu-show');
    });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 450) {
        $('.hamburger').attr('style', 'background: #000000');
    } else {
        $('.hamburger').removeAttr('style', 'background: #000000');
    }
});

               $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });

      $('#slides2').slidesjs({
        width: 940,
        height: 528,
        navigation: false,
      });

      $('#slides3').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
      $('#slides4').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
      $('#slides5').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
       $('#slides6').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
    });


$slideArrowPrev.hover(function(){
    $bgArrowSlidePrev.toggleClass('previouss');
    });


$slideArrowNext.hover(function(){
    $bgArrowSlideNext.toggleClass('nextt');
    });


    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .panel').slideUp(100).removeClass('open');
    }

  $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
        }
 
        e.preventDefault();
    });

});