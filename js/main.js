$(document).ready(function(){ 
    if ($(window).width() > 800){
        $('#resume').addClass('smooth');
        $('#main').animate({opacity: 1, "left":"0%"},2000);
        setTimeout(function(){
            $('#resume').removeClass('smooth');
            $('.resume').addClass('resume-box');
        },2000);
    } else {
        $('#main').removeClass('fromR').addClass('fromB');
        $('body').addClass('smooth');
        $('#main').animate({opacity: 1, "margin-top":"0%"},800),
        setTimeout(function(){
            $('body').removeClass('smooth');
            $('.resume').addClass('resume-box');
        },800);        
    }
});