$(function(){
    $('.carousel').carousel( { interval: 2000 } );
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('i').hasClass('fa-pause')){
            $('.carousel').carousel('pause');
            $('#carouselButton').children('i').removeClass('fa-pause');
            $('#carouselButton').children('i').addClass('fa-play');
        }else{
            $('.carousel').carousel('cycle');
            $('#carouselButton').children('i').removeClass('fa-play');
            $('#carouselButton').children('i').addClass('fa-pause');
        }
    });
    //checkScroll checks if nav bar's position changed and applies class to make it transparent
    function checkScroll(){
        let startY = $('.navbar').height();// * 2; //The point where the navbar changes in px
    
        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }
    
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }
});