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
            var $mainListItemswrap = $('#main ul');
            var itemListLength;
            var imgCount = 0;
            var typoCount = 0;
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
                
                itemListLength = (imgURLlist.length * 2)-1;
                for (var index = 0; index < itemListLength; index++) {
                    if(index % 2){
                        $mainListItemswrap.append('<li class="transparentItem"></li>');
                        typoCount++;
                    }
                    else{
                        
                        // $mainListItemswrap.append('<li class="item"><a href="./works/archives'+ imgCount +'/"><img src='+ imgURLlist[imgCount] +'></a></li>');
                        $mainListItemswrap.append('<li class="item"><a href="./works/archives'+ 1 +'/"><img src='+ imgURLlist[imgCount] +'></a></li>');
                        if(index === 0){
                            $mainListItemswrap.find('li').addClass('logo');
                        }                    
                        imgCount++;
                    }
                }

                var randomSetItem = $mainListItemswrap.find('li.item');
                function randomShow(){
                    
                    var elmLength = randomSetItem.length;
                    console.log(elmLength);
                
                    randomSetNum = Math.floor(Math.random()*elmLength);
                    $(randomSetItem[randomSetNum]).velocity({opacity:'1'},{duration:300,easing:"easeOutIn"});
                    randomSetItem.splice(randomSetNum,1);
                    
                    if (elmLength > 0) {
                        setTimeout(function(){randomShow();},100);
                    } else {
                        return false;
                    }
                }
                randomShow();

                //masonry
                
                if(device != "SP"){
                    masonryInitiraized();
                }
                $body.on('resize:responsive',function(){
                    // console.log(device);
                    if(device != "SP"){
                        masonryInitiraized();
                    }else{
                        console.log("masonry-sp");
                        $mainListItemswrap.masonry('destroy');
                    }
                })

                function masonryInitiraized(){
                    $mainListItemswrap.imagesLoaded(function(){
                        $mainListItemswrap.masonry({
                        // options
                        fitWidth: true,
                        columnWidth: '.item',
                        gutter: 20,
                        resize: true 
                        });
                        
                        // $mainListItemswrap.masonry( 'on', 'layoutComplete', function() {typofade();});
    
                        function typofade(){
                            if(Math.floor($mainListItemswrap.innerWidth()/184) % 2){
                                $mainListItemswrap.find('li.item').removeClass('is-active');
                                $mainListItemswrap.find('li.transparentItem').removeClass('is-active');
                                $mainListItemswrap.find('li.transparentItem a').remove();
                            }
                            else{
                                var rowItems;
                                var columnItems;
                                var itemArray = [];
                                $mainListItemswrap.find('li').each(function(){
                                    rowItems = Math.ceil(index/($mainListItemswrap.innerWidth()/184));
                                    columnItems = Math.ceil(($mainListItemswrap.innerWidth()/184));
                                    itemArray.push($(this));
                                });

                                //単配列の宣言
                                var array = [];
                                var once=0;
                                //for文で要素を格納する
                                for(var i=0; i<rowItems; i++){
                                    //配列の要素数を指定する
                                　　 array[i] = [];
                                    for(var j=0; j<columnItems-1; j++){
                                        array[i][j] = itemArray.shift();
                                    }
                                }
                                
                                // console.log(array.filter(function(v, i) { return i % 2 === 1 }).reduce(function(prev,item){ return prev.concat(item) },[]).filter(function(v, i) { return i %2 === 0 }));
                                
                                for(var j=0; j<rowItems; j++){
                                    if((j%2 === 1)){
                                    
                                        // console.log(array[j]); // まずは奇数の一次配列配列
                                        for(var x = 0; x < columnItems -1; x++){
                                            if((x%2===1)){
                                                // array[j][x].addClass('is-active');
                                            }
                                            else{
                                                // var cloneImg = array[j][x].find('a').clone();
                                                // array[j][x].next().append(cloneImg);
                                                array[j][x].addClass('is-active');
                                            }
                                            
                                        }
                                    }
                                }
                            
                            }
                        }
                        // typofade();
                    })
                }
            }



            var ResponsiveTrigger = function(){
                
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

            return{
              imgItemInit : imgItemInit,
              ResponsiveTrigger : ResponsiveTrigger ,
              ModalWindow : ModalWindow,
              ToggleSwitchBtn : ToggleSwitchBtn
            };
        })();

        // window load
        $(window).on('load',function(){
            //resposive-reaction selector append
            $body.append('<div class="responsive-reaction"></div>');
            
            //loading
            setTimeout(function(){
                $('#loading_overray .bg').velocity({width:"100%"},1000,"easeInOutCubic",function () {
                    $('#loading_overray').hide();
                    $(this).hide();
                    HOME.imgItemInit();
                })
            },1500);
            
            HOME.ResponsiveTrigger();
            HOME.ModalWindow();
            HOME.ToggleSwitchBtn();
        })
        // window resize
        $(window).on('resize',function(){
            
            HOME.ResponsiveTrigger();
        })

    });
})(jQuery);
