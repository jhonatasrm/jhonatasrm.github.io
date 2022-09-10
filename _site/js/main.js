$(document).ready(function () {
  if(window.location.href.includes('/about/')){
    $('.cover-navigation').css('margin-top', '10px');
    $('#about').css("display", "none");
    if (window.innerWidth < 960) {
      $('#close-content').css('display', 'none');
      $('#close-content-mb').css('display', 'flex');
      // $('#close-content-mb').css('width', '100%');
    } else {
      $('#close-content').css('display', 'none');
      $('#close-content-mb').css('display', 'none');
    }
    // $('#close-content').addClass('btn-mobile-close-icon icon-close-circle animated fadeInDownBig d-flex-img');
    //$('.navigation-wrapper').css('margin-top', '0px'); 
    //$('.navigation--social').css('padding-top', '25px');
  }

  $('#close-content').click(function(){
    document.title = "Jhonatas Machado";
    window.history.pushState('state', 'title', '/');
    $('#close-content').css('display', 'none');
    //$('#about-button').css('visibility', 'visible');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    //$('#about').css("display", "inline-block");
    ////margin-top', '10px'); 
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
    document.title = "About | Jhonatas Machado";
    window.history.pushState('state', 'title', '/about/');
    $('#about-button').css('display', 'none');
    $('#about').css('display', 'none');
    // $('#close-content').addClass('btn-mobile-close-icon icon-close-circle animated fadeInDownBig d-flex-img');
    if (window.innerWidth < 960) {
      $('#close-content').css('display', 'none');
      $('#close-content-mb').css('display', 'flex');
      //$('#close-content-mb').css('width', '100%');
    } else {
      $('#close-content').css('display', 'block');
      $('#close-content-mb').css('display', 'none');
    }
    // $('#close-content').css("margin-top", "50px");
    // $('#close-content').css("margin-left", "4px");
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if (window.width < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInTop');
    } else {
      $('.panel-cover').addClass('panel-cover--collapsed');
      //$('.panel-cover').css('max-width', currentWidth);
     // $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
       if (window.innerWidth > 960) {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper').addClass('animated slideInRight');
       }
    }
  });

})
$(document).ready(function () {
  if(window.location.href.includes('/about/')){
    $('#about').css('display', 'none');
    // $('#close-content').addClass('btn-mobile-close-icon icon-close-circle animated fadeInDownBig d-flex-img');
    if (window.innerWidth < 960) {
      $('#close-content').css('display', 'none');
      $('#close-content-mb').css('display', 'flex');
      //$('#close-content-mb').css('width', '100%');
    } else {
      $('#close-content').css('display', 'block');
      $('#close-content-mb').css('display', 'none');
    }
    // $('#close-content').css("margin-top", "50px");
    // $('#close-content').css("margin-left", "4px");
    //$('.navigation-wrapper').css('margin-top', '10px'); 

    //$('.navigation--social').css('padding-top', '25px');
  } else {
    $('#about-button').css('display', 'block');
    $('#close-content').css('display', 'none');
  }

  $('#close-content').click(function(){
    document.title = "Jhonatas Machado";
    window.history.pushState('state', 'title', '/');
    $('#about-button').css('display', 'block');
    $('#about').css('display', 'inline-block');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    // $('#close-content').removeClass('btn-mobile-close-icon icon-close-circle animated fadeInDownBig d-flex-img');
    //$('.navigation-wrapper').css('margin-top', '10px');  
    //$('.navigation--social').css('padding-top', '0px');
    //$('.navigation--social').css('margin-top', '-7px');
    
   if (window.innerWidth > 960) {
      //$('#about-button').css('margin-bottom', '20px');
   } else {
        if($('.navigation-wrapper').hasClass('visible')){
          $('.btn-mobile-menu').click();
          $('.navigation-wrapper').css('margin-top', '0px');
        }
     }
  });

  $('#close-content-mb').click(function(){
    document.title = "Jhonatas Machado";
    window.history.pushState('state', 'title', '/');
    $('#about-button').css('display', 'block');
    $('#about').css('display', 'inline-block');
    $('#close-content-mb').css('display', 'none');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    // $('#close-content').removeClass('btn-mobile-close-icon icon-close-circle animated fadeInDownBig d-flex-img');
    //$('.navigation-wrapper').css('margin-top', '10px');  
    //$('.navigation--social').css('padding-top', '0px');
    //$('.navigation--social').css('margin-top', '-7px');
    
   if (window.innerWidth > 960) {
      //$('#about-button').css('margin-bottom', '20px');
   } else {
        if($('.navigation-wrapper').hasClass('visible')){
          $('.btn-mobile-menu').click();
          $('.navigation-wrapper').css('margin-top', '0px');
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
    $('#about').css('display', 'none');
      // $('#close-content').addClass('btn-mobile-close-icon icon-close-circle animated fadeInDownBig d-flex-img');
      if (window.innerWidth < 960) {
        $('#close-content').css('display', 'none');
        $('#close-content-mb').css('display', 'flex');
        //$('#close-content-mb').css('width', '100%');
      } else {
        $('#close-content').css('display', 'block');
        $('#close-content-mb').css('display', 'none');
      }
      // $('#close-content').css("margin-top", "50px");
      // $('#close-content').css("margin-left", "4px");
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if (window.width < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      //$('.panel-cover').css('max-width', currentWidth);
     // $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
      //$('#about-button').css('visibility', 'visible');
       if (window.innerWidth > 960) {
          //$('#about-button').css('margin-bottom', '20px');
       }
    }
  });
})
