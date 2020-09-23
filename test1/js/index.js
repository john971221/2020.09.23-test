window.addEventListener('DOMContentLoaded', function () {
    $('#center').html("<img style='height:618px;' src='img/img-vita.png'' />");
    $('#center').css({
        "position": "absolute"
    })
    $('#center').animate({
        "left": "16.8%",
        "top": "190px"
    })

    $('.popup').css({
        "background-position": "center center;",
        "background-image": "url(img/img-popup.jpg)"
    });
    
    
    $('main .radius span').on('click', function(a){
        console.log($(this).index())
        if($('main .radius span').hasClass('active')){
            $('main .radius span').removeClass('active')
        }
        $(this).addClass('active')
        
    })

    $('header .burger').on('click', function () {
        if ($('header .menue ul li').hasClass('active')) {
            $('header .menue ul li').removeClass('active')
        } else {
            $('header .menue ul li').addClass('active')
        }
        if ($('header .menue').hasClass('active')) {
            $('header .menue').removeClass('active')
        } else {
            $('header .menue').addClass('active')
        }
    })

    $('main .underCon a').on('click', function () {

        $('.popup').addClass('active')

        $('.popup .Xbtn').on('click', function () {
            $('.popup').removeClass('active')
        })

    })
})
