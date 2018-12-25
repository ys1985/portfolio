(function($) {
    $(function() {
        var slickInitialized = function(){
            $('.slick_slider').slick({
                dots: true,
                // fade:true,
                // infinite: true,
                // autoplay : true,
                speed: 1000,
                // autoplaySpeed : 2000,
                responsive: [
                   {
                     breakpoint: 768,
                     settings: {
                       dots: true,
                       swipe:true,
                    //    autoplay : true,
                       speed: 1000,
                       autoplaySpeed : 2000
                     }
                   }
                   // You can unslick at a given breakpoint now by adding:
                   // settings: "unslick"
                   // instead of a settings object
                 ]
            });
        }

        // window on load
        $(window).on('load',function(){
            slickInitialized();
        })

    });
})(jQuery);
