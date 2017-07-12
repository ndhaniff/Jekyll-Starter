$(document).ready(function(){
//toggle menu
  $('.clickme').on('click',function(){
    $('.wrapper').toggleClass('shrink');
    $('.clickme').toggleClass('navbtn');
    $('.brand').toggleClass('hack');
  });

//animation when scroll
  $(window).scroll(function() {
    let y = $(this).scrollTop();
    console.log(y);

    if (y >= 600){
      $('.text1').addClass('show');
      $('.text1 h1').addClass('animated slideInRight');
      $('.text1 h2').addClass('animated slideInRight');
    }
    if (y >= 1200){
      $('.text2').addClass('show');
      $('.text2 h1').addClass('animated slideInLeft');
      $('.text2 h2').addClass('animated slideInLeft');
    }
    if (y >= 1560){
      $('.text3').addClass('show');
      $('.viewmore').addClass('slideInLeft');
      $('.text3 h1').addClass('animated slideInRight');
      $('.text3 h2').addClass('animated slideInRight');
    }

    //link scroller
    $('.link2').on('click',function(){
      $(this).scrollTop(800);
    });
  });


  //waterwheel corousel
  $('#carousel').waterwheelCarousel({
    flankingItems:3
  });

 //smooth scroll effect
  $('.link').on('click',function(e){
    //grab href attrbute data
     let linkHref = $(this).attr('href');

     $('html,body').animate({
       scrollTop: $(linkHref).offset().top,
     }, 1000);

    e.preventDefault();
  });
});
