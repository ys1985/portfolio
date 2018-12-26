(function($) {
    $(function() {
       
        var themeColor;
        var currentThemeColor;
        var $body = $('body');
        var toggleSwitchSelector = document.querySelector('.toggleSwitch');
        var toggleSwitchLocked;

        //localStorage getItem
        currentThemeColor = localStorage.getItem('toggleSwngitchClass');
        
        //curren theme addClass
        $body.addClass(currentThemeColor);
       
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

            var imgItemInit = function(){

                var itemsArray = [];
                var randomArray = [];
            
                for (var index = 0; index < itemListLength; index++) {
                    if(index % 2){
                        $mainListItems.append('<li class="transparentItem"></li>');
                    }
                    else{
                        
                        $mainListItems.append('<li class="item"><a href="./works/archives'+ imgCount +'/"><img src='+ imgURLlist[imgCount] +'></a></li>');
                        if(index === 0){
                            $mainListItems.find('li').addClass('logo');
                        }                    
                        imgCount++;
                        console.log(imgCount);
                    }
                }

                var setElm = $mainListItems.find('li.item');
                
                function randomShow(){
                    
                    var elmLength = setElm.length;
                
                    randomSet = Math.floor(Math.random()*elmLength);
                    $(setElm[randomSet]).velocity({opacity:'1'},{duration:500});
                    setElm.splice(randomSet,1);
                    
                    if (elmLength > 0) {
                        setTimeout(function(){randomShow();},100);
                    } else {
                        return false; //全てロード終了後に処理を加える際はココに
                    }
                }
                randomShow();
                
            }

            var ResponsiveTriggerHandler = function(){

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
            
            var ToggleSwitchBtn = function(){
                
                //toggle switch css_transition_end
                if(toggleSwitchSelector){
                    toggleSwitchSelector.addEventListener("transitionend", function(evt) {
                        toggleSwitchLocked = false;
                    });
                }

                $('.toggleSwitch').on('click',function(){
                    
                    if(!toggleSwitchLocked){
                        $body.toggleClass('is-dark');
                        if($body.hasClass('is-dark')){
                            themeColor = 'is-dark';
                        }
                        else{
                            themeColor = 'is-light';
                        }
                        localStorage.setItem('toggleSwngitchClass', themeColor); 
                        toggleSwitchLocked = true;
                    }                    
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

            // $('body').on('resize:responsive',function(){
            //     pagetopHandler();
            // });

            return{
              imgItemInit : imgItemInit,
              ResponsiveTriggerHandler : ResponsiveTriggerHandler ,
              ModalWindow : ModalWindow,
              ToggleSwitchBtn : ToggleSwitchBtn
            };
        })();

        // window load
        $(window).on('load',function(){
            

            setTimeout(function(){
                $('#loading_overray .bg').velocity({width:"100%"},1000,"easeInOutCubic",function () {
                    $('#loading_overray').hide();
                    $(this).hide();
                    HOME.imgItemInit();
                })
            },1500);

            //resposive-reaction selector append
            $body.append('<div class="responsive-reaction"></div>');

            
            HOME.ResponsiveTriggerHandler();
            HOME.ModalWindow();
            HOME.ToggleSwitchBtn();
        })
        // window resize
        $(window).on('resize',function(){
            HOME.ResponsiveTriggerHandler();
        })

    });
})(jQuery);
