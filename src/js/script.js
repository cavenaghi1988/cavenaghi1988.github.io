$(document).ready(function(){
    let slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false,
        responsive: {
            640: {
              
            },
            700: {
              
            },
            900: {
              
            }
          }
      });
    
      let sliderPrev = document.querySelector('.prev'),
          sliderNext = document.querySelector('.next');
    
      
      sliderPrev.addEventListener('click', function(){
          slider.goTo('prev');
      });
    
      sliderNext.addEventListener('click', function() {
          slider.goTo('next');
      });
    
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      }); 


        function toggleSlide(item) {
            $(item).each(function(i){
                $(this).on('click', function(e){
                    e.preventDefault();
                    $('.catalog-item__cont').eq(i).toggleClass('catalog-item__cont_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
            });
        }

        toggleSlide('.catalog-item__back');
        toggleSlide('.catalog-item__link');

//Modal

        $('[data-modal=consultation]').on('click', function(){
            $('.overlay,#consultation').fadeIn();
        });

        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #buy, #succeful').fadeOut();
        });

        $('.button_catalog-item').each(function(i){
            $(this).on('click', function(){
                $('#buy .modal__subtitle').text($('.catalog-item__title').eq(i).text());
                $('.overlay, #buy').fadeIn();
            });
        });

        new WOW().init();
    

});
