$(document).ready(function(){
    $('.sub-btn').click(function(){    
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.fa-chevron-right').toggleClass('rotate');
    });
    $('.sub-item').click(function(){    
        $(this).next('.sub-menu1').slideToggle();
        $(this).find('.fa-chevron-right').toggleClass('rotate');
    });
    
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility","hidden")
    });
    
    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility","visible")
    });
});
