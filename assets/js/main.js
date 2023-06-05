
// Change Nav Color On Scroll
$(window).scroll(function(){
    if($(window).scrollTop() < $('#changeNav').offset().top){
        $('#navbar').css("backgroundColor","transparent")
        $('#navbar').css("transition","1s")

    }

    if($(window).scrollTop() >= $('#changeNav').offset().top){
        $('#navbar').css("backgroundColor","White")
        $('#navbar').css("transition","1s")
    }

    if($(window).scrollTop() >= $('#service').offset().top){
        $('#navbar').css("backgroundColor","White")
        $('#navbar').css("transition","1s")
    }

    if($(window).scrollTop() >= $('#portfolio').offset().top){
        $('#navbar').css('backgroundColor','#CCFEEE')
        $('#navbar').css("transition","1s")
    }

    if($(window).scrollTop() >= $('#bio').offset().top){
        $('#navbar').css('backgroundColor','#EEECCC')
        $('#navbar').css("transition","1s")
    }

    if($(window).scrollTop() >= $('#contact').offset().top){
        $('#navbar').css('backgroundColor','#EEE')
        $('#navbar').css("transition","1s")
    }
   
    if($(window).scrollTop() >= $('#about').offset().top){
        $('.scrollToTop').css('opacity','1')
    }

    if($(window).scrollTop() < $('#about').offset().top){
        $('.scrollToTop').css('opacity','0')
    }
   
})

// scroll to top
$('.scrollToTop').click(function(){
    $('html,body').animate({scrollTop:0},1000)
    
})


// smooth scroll
$('.nav-link').click(function(){
    let currntId = $(this).attr('href');
    let sectionOffset = $(currntId).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},1000)
})




// loading screen
$('body').css('overflow','hidden')
$(document).ready(function(){
    $('.loading').fadeOut(3000,function(){
        $('body').css('overflow','auto')

    })
})


// theme

let width = $('.options').outerWidth();
let left = $('.theme').offset().left
$('.theme').animate({left:-width});

$('.theme i').click(function(){
    let width = $('.options').outerWidth();
   
    let left = $('.theme').offset().left
    if(left == 0){
        $('.theme').animate({left:-width},2000);
    }
    else{
        $('.theme').animate({left:0},2000);
    }
})

let Colors = ['#654E92','#FEA1A1','#47A992','#ff724c','#41644A'];
for(let i = 0 ; i<Colors.length; i++){
    $('.options li').eq(i).css('backgroundColor',Colors[i])
}

$('.options li').click(function(){
    let bg = $(this).css('backgroundColor')
    $('html').attr('style',`--main-color:${bg}`)
})

