//active class
$('.navbar-nav li a').click(function () {
  $('.navbar-nav').find(".active").removeClass("active");
  $(this).parent().addClass("active");
})

//change navbar background when scroll
var homeOffest=$('#home').offset().top;
$(window).scroll(function(){
        let topOffset=$(window).scrollTop();
        if(topOffset>homeOffest)
        {
                $('.navbar').css({'background-color':'rgba(103, 176, 209,.8)','padding':'0','transition':'.4s all','box-shadow': '0 13px 8px -10px #0000001a'});
                $('.navbar-nav').css({'margin-top':'0','background-color':'transparent'});
                $('.navbar .nav-link').css({'color':'#fff'})
        }else
        {
                $('.navbar').css({'background-color':'transparent','box-shadow':'none'});
                $('.navbar-nav').css({'margin-top':'10px','background-color':'#BAD6E4'});
                $('.navbar .nav-link').css({'color':'#2f4d5a'})
        }
          //scrollup button
          if(topOffset>homeOffest)
          {
                  $('.scrollup i').fadeIn(500)
          }else
          {
                  $('.scrollup i').fadeOut(500)
          }

})

$('.scrollup i').click(function(){
  $('body,html').animate({scrollTop:0},500)
})



// carsoual-Plugin
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      
    ]
  });

  //wow plugin
new WOW().init();

  // counter-Plugin
$('.counter').counterUp();


