/*
Author URI: http://webthemez.com/
Note: 
Licence under Creative Commons Attribution 3.0 
Do not remove the back-link in this web template 
-------------------------------------------------------*/

$(window).load(function() {
    jQuery('#all').click();
    return false;
});

 $("a").click(function(){
             i=$(this).data("value");
         	if(i==1) {
         	$('#nactive').removeClass('active');
         	$('#aactive').addClass('active');
         	$("#wwide1").css("display", "none");
         	$("#USwide1").css("display", "block");
         	$("#wwide").css("display", "none");
         	$("#USwide").css("display", "block");
         	$("#Pakwide").css("display", "none");
         	$("#Pakwide2").css("display", "none");
         	$("#Pakwide1").css("display", "none");
         	$("#pages").css("display", "block");
			$("#ntrends").css("display", "block");
         	$("a").click(function(){
         	i=$(this).data("value");
         	if(i==4) {
         	$("#Pakwide1").css("display", "none");
         	$("#USwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#Pakwide2").css("display", "none");
         	$("#USwide2").css("display", "block");
         	$('.active').removeClass('active');
         	$(this).parent('li').addClass('active');
         		}
         	else if(i==3) {
         	$("#USwide2").css("display", "none");
         	$("#Pakwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#Pakwide2").css("display", "none");
         	$("#USwide1").css("display", "block");
             $('.active').removeClass('active');
         	 $(this).parent('li').addClass('active');
         	}
			
			else if(i==6) {
         	
         	$("#Pakwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#Pakwide2").css("display", "none");
         	$("#USwide1").css("display", "block");
			$("#USwide2").css("display", "block");
			$("#pages").css("display", "none");
         
         	}
			
			else if(i==5) {
         	$('#nactive').removeClass('active');
         	$('#aactive').addClass('active');
         	$("#Pakwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#Pakwide2").css("display", "none");
			$("#USwide2").css("display", "none");
         	$("#USwide1").css("display", "block");			
            $("#pages").css("display", "block");
			      
         		}
				
         
         	});
         	
         	
         	}
             else if(i==2) {
         	$('#nactive').removeClass('active');
         	$('#aactive').addClass('active');
         	$("#wwide1").css("display", "none");
         	$("#USwide1").css("display", "none");
         	$("#USwide2").css("display", "none");
         	$("#wwide").css("display", "none");
         	$("#USwide").css("display", "none");
         	$("#Pakwide").css("display", "block");
         	$("#Pakwide1").css("display", "block");
         	$("#pages").css("display", "block");
			$("#ntrends").css("display", "block");
         	$("a").click(function(){
         		i=$(this).data("value");
         	if(i==4) {
         	$("#USwide1").css("display", "none");
         	$("#Pakwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#USwide2").css("display", "none");
         	$("#Pakwide2").css("display", "block");
         	 $('.active').removeClass('active');
         	 $(this).parent('li').addClass('active');
         		}
         		else if(i==3) {
         	$("#USwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#USwide2").css("display", "none");
         	$("#Pakwide2").css("display", "none");
         	$("#Pakwide1").css("display", "block");
         	
         	$('.active').removeClass('active');
         	 $(this).parent('li').addClass('active');
         		}
				
			else if(i==6) {
         	
         	$("#USwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#USwide2").css("display", "none");
         	$("#Pakwide1").css("display", "block");
			$("#Pakwide2").css("display", "block");
			$("#pages").css("display", "none");
			
         
         	}
			
			else if(i==5) {
         	$('#nactive').removeClass('active');
         	$('#aactive').addClass('active');
         	$("#USwide1").css("display", "none");
         	$("#wwide1").css("display", "none");
         	$("#Pakwide2").css("display", "none");
			$("#USwide2").css("display", "none");
         	$("#Pakwide1").css("display", "block");			
            $("#pages").css("display", "block");
			      
         		}	
				
         	});
         	
         	}
         	
             
         });
         
		 
$(document).ready(function() {
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });
	
    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }
	
    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });

   $(".fancybox").fancybox();
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
document.getElementById('').onclick = function() {
    var section = document.createElement('section');
    section.className = 'wow fadeInDown';
    section.className = 'wow shake';
    section.className = 'wow zoomIn';
    section.className = 'wow lightSpeedIn';
    this.parentNode.insertBefore(section, this);
};