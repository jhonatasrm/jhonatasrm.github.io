---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  if(window.location.href.includes('/about')){
    $('#about-button').css('display', 'none');
    $('.navigation-wrapper').css('margin-top', '-25px'); 
  }

  $('#close-content').click(function(){
    $('#about-button').css('display', 'block');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    $('.navigation-wrapper').css('margin-top', '10px'); 
  });

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
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
    }
  });

})