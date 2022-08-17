$(document).ready(function () {
  if(window.location.href.includes('/about')){
    $('#about-button').css('display', 'none');
    $('.cover-navigation').css('margin-top', '0px');
    //$('.navigation-wrapper').css('margin-top', '-42px'); 
    //$('.navigation--social').css('padding-top', '25px');
  }

  $('#close-content').click(function(){
    document.title = "Jhonatas Machado";
    window.history.pushState('state', 'title', '/');
    $('#about-button').css('display', 'block');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    //$('.navigation-wrapper').css('margin-top', '0px');  
    //$('.navigation--social').css('padding-top', '0px');
    //$('.navigation--social').css('margin-top', '-7px');
    
   if (window.innerWidth > 960) {
      //$('#about-button').css('margin-bottom', '20px');
   } else {
        if($('.navigation-wrapper').hasClass('visible')){
          $('.btn-mobile-menu__icon').click();
        }
     }
  });

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
    if(!$('.btn-mobile-menu__icon').hasClass('animated')){
      $('.btn-mobile-menu').css("background", "#202020");
    }else {
      $('.btn-mobile-menu').css("background", "rgba(0,0,0,0.4)");
    }
  });

  $('.btn-mobile-menu__icon').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
    if(!$('.btn-mobile-menu__icon').hasClass('animated')){
      $('.btn-mobile-menu').css("background", "#202020");
    }else {
      $('.btn-mobile-menu').css("background", "rgba(0,0,0,0.4)");
    }
  });

  $('#about-button').click(function(){
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if (window.width < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
      $('#about-button').css('visibility', 'visible');
       if (window.innerWidth > 960) {
          //$('#about-button').css('margin-bottom', '20px');
       }
    }
  });

})
$(document).ready(function () {
  if(window.location.href.includes('/about')){
    $('#about-button').css('display', 'none');
    //$('.navigation-wrapper').css('margin-top', '-42px'); 
    //$('.navigation--social').css('padding-top', '25px');
  }

  $('#close-content').click(function(){
    document.title = "Jhonatas Machado";
    window.history.pushState('state', 'title', '/');
    $('#about-button').css('display', 'block');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    $('.navigation-wrapper').css('margin-top', '0px');  
    //$('.navigation--social').css('padding-top', '0px');
    //$('.navigation--social').css('margin-top', '-7px');
    
   if (window.innerWidth > 960) {
      //$('#about-button').css('margin-bottom', '20px');
   } else {
        if($('.navigation-wrapper').hasClass('visible')){
          $('.btn-mobile-menu').click();
        }
     }
  });

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper #about-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('#about-button').click(function(){
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if (window.width < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
      $('#about-button').css('visibility', 'visible');
       if (window.innerWidth > 960) {
          //$('#about-button').css('margin-bottom', '20px');
       }
    }
  });

})
