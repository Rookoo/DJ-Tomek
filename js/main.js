(function($) {
    $(window).load(function() { 
       $('#status').fadeOut(); 
         $('#preload').delay(350).fadeOut('slow'); 
           $('body').delay(350).css({'overflow':'visible'});
    });

})(jQuery)

$(document).ready(function() {

            $('#fullpage').fullpage({
                anchors: ['Dj Tomek', 'Oferta', 'O mnie', 'Referencje', 'FAQ', 'Kontakt'],
                  navigation: true,
                    slidesNavigation: true,
                      navigationPosition: 'right',
                        navigationTooltips: ['Dj Tomek', 'Oferta', 'O mnie', 'Referencje', 'FAQ', 'Kontakt'],
                          responsiveWidth: 1023,
            });

            var $toggleButton = $('#nav-icon'),
                  $menuWrap = $('.menu-wrap'),
                    $scrollingDiv = $('#nav-icon'),
                      $slideArrowPrev = $('.slidesjs-previous'),
                        $slideArrowNext = $('.slidesjs-next'),
                          $bgArrowSlidePrev = $('.background-slidejs-prev'),
                            $bgArrowSlideNext = $('.background-slidejs-next');
                              // $modalparent = $('.modal')
                              //   $modalBtn = $('.img-offert')
                              //     $spanClose = $('.modal-close')


   $toggleButton.on('click', function() {
        $(this).toggleClass('open');
            $menuWrap.toggleClass('menu-show');
    });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
      if(scroll >= 450) {
        // $('.hamburger').attr('style', 'background: #000000');
        $('.hamburger').addClass('hamburger-black');
    } else {
        // $('.hamburger').removeAttr('style', 'background: #000000');
        $('.hamburger').removeClass('hamburger-black');
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
        navigation: false
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

      
      var modalparent = document.getElementsByClassName("modal_multi");
        var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
        var span_close_multi = document.getElementsByClassName("modal-close");


        function setDataIndex() {

            for (i = 0; i < modal_btn_multi.length; i++)
            {
                modal_btn_multi[i].setAttribute('data-index', i);
                modalparent[i].setAttribute('data-index', i);
                span_close_multi[i].setAttribute('data-index', i);
            }
        }


        for (i = 0; i < modal_btn_multi.length; i++)
        {
            modal_btn_multi[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.visibility = "visible";
                modalparent[ElementIndex].style.opacity = "1";
                modalparent[ElementIndex].style.transition = "opacity 0.25s linear";
            };

            span_close_multi[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.visibility = "hidden";
                modalparent[ElementIndex].style.opacity = "0";
                modalparent[ElementIndex].style.transition = "visibility 0.25s linear 0.25s,opacity 0.25s linear";
            };

        }

        window.onload = function() {

            setDataIndex();
        };

        window.onclick = function(event) {
            if (event.target === modalparent[event.target.getAttribute('data-index')]) {
                modalparent[event.target.getAttribute('data-index')].style.visibility = "hidden";
                modalparent[event.target.getAttribute('data-index')].style.opacity = "0";
                modalparent[event.target.getAttribute('data-index')].style.transition = "visibility 0.25s linear 0.25s,opacity 0.25s linear";
            }
        };

});