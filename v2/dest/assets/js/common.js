(function($) {
    $(function() {
        
        var themeColor;
        var currentThemeColor;
        currentThemeColor = localStorage.getItem('toggleSwngitchClass');

        $('body').addClass(currentThemeColor);
        
        var HOME = (function(){
            var $body = $('body');
            var device;
            var device_cheker;
            var $contentsSlideWrap = $('#contents-slide-wrap');
            var window_w = $(window).innerWidth();
            var $header = $('#header');
            var $mainListItems = $('#main ul');
            var itemListLength = 25;
            var imgCount = 0;
            var imgURLlist = [
                'assets/images/logo.svg',
                'assets/images/sp_mhd_logo.png',
                'assets/images/sp_moet_logo.png',
                'assets/images/sp_fivestar_logo.png',
                'assets/images/sp_tokyometro_logo.png',
                'assets/images/sp_gazooraicng_logo.png',
                'assets/images/logo_gmominer.svg',
                'assets/images/sp_zushifes_logo.png',
                'assets/images/sp_lenovo_logo.png',
                'assets/images/sp_homestar_logo.png',
                'assets/images/wabisabi_logo.svg',
                'assets/images/sp_dance_logo.png',
                'assets/images/sp_macromill_logo.png',
            ]

            var ResonsiveReactionInit = function(){
                
                $body.append('<div class="responsive-reaction"></div>');
            
                for (var index = 0; index < itemListLength; index++) {
                    if(index % 2){
                        $mainListItems.append('<li class="transparentItem"></li>');
                    }
                    else{
                        
                        $mainListItems.append('<li class="item"><a href="/works/archives'+ imgCount +'/"><img src='+ imgURLlist[imgCount] +'></a></li>');
                        if(index === 0){
                            $mainListItems.find('li').addClass('logo');
                        }
                        imgCount++;
                    }          
                }             

            //masonry
            //   var $bnrthumbList = $('#bnrthumb-list');
            //   $bnrthumbList.imagesLoaded(function(){
            //     $bnrthumbList.masonry({
            //     // options
            //     itemSelector: '.grid-item',
            //     columnWidth: '.grid-item',
            //     percentPosition: true ,
            //     horizontalOrder: true
            //     });
            //   })
            }

            var ResponsiveHandler = function(){
                device = $('.responsive-reaction').css('visibility');
                  if(device === "visible"){
                      device = "PC";
                  }
                  else{
                      device = "SP";
                  }
                  if(device_cheker != device){
                      device_cheker = device;
                      $body.trigger('resize:responsive');
                  }
              }
        
            
            var HeaderMenu = function(){
              $('#ico-menu').click(function(e){
                e.stopPropagation();
                $contentsSlideWrap.toggleClass('active');
              })
              $('#header').click(function(e){
                if($contentsSlideWrap.hasClass('active')){
                  $contentsSlideWrap.removeClass('active');
                }
                else{
                  return false;
                }
              })
            }

            var ToggleSwitchBtn = function(){         
                $('.toggleSwitch').on('click',function(){
                    $('body').toggleClass('is-dark');
                    
                    if($('body').hasClass('is-dark')){
                        themeColor = 'is-dark';
                    }
                    localStorage.setItem('toggleSwngitchClass', themeColor);
                    
                })
            }

            var ModalWindow = function(){
                $('.aboutme').on('click',function(){
                    $('#aboutme_modal').fadeIn(300);
                })
                $('.closeBtn').on('click',function(){
                    $('#aboutme_modal').fadeOut(300);
                })
            }

            var pagetopHandler = function(){
              var $pagetop = $('.pagetop');
              var $body = $('body');

              var pagetopClick = function(){
                  $pagetop.on('click',function(){
                      var body_top = $('body').offset().top;
                      $('html , body') .animate({ scrollTop:body_top},300);
                  })
              }

              var pageScroll = function(windowObj){
                if(windowObj.scrollTop() > 50){
                    $header.addClass('fixed');
                }
                if(windowObj.scrollTop() < 20){
                    $header.removeClass('fixed');
                }
                  if(windowObj.scrollTop() > 100){
                      $pagetop.addClass('active');
                      $header.addClass('fixed_fix');
                  }
                  if(windowObj.scrollTop() < 100){
                      $pagetop.removeClass('active');
                      $header.removeClass('fixed_fix');
                  }
              }

              $(window).on('scroll',function(){
                  pageScroll($(this));
              })
              pagetopClick();
              pageScroll($(window));
            }

            $('body').on('resize:responsive',function(){
                pagetopHandler();
            });

            return{
              ResonsiveReactionInit : ResonsiveReactionInit,
              ResponsiveHandler : ResponsiveHandler ,
              HeaderMenu : HeaderMenu,
              ModalWindow : ModalWindow,
              ToggleSwitchBtn : ToggleSwitchBtn
            };
        })();

        // window resize
        $(window).on('load',function(){
            HOME.HeaderMenu();
            HOME.ResonsiveReactionInit();
            HOME.ResponsiveHandler();
            HOME.ModalWindow();
            HOME.ToggleSwitchBtn();

        })
        // window resize
        $(window).on('resize',function(){
            HOME.ResponsiveHandler();
        })

    });
})(jQuery);
