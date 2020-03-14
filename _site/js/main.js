$(document).ready(function () {

  $('#about-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed') || $('.panel-cover').hasClass('panel-cover--overlay')){
      $('#about-button').css('visibility', 'hidden') 
      return
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
      $('#about-button').css('visibility', 'hidden') 
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      $('#about-button').css('visibility', 'hidden')
    }
  })

  if (window.location.hash && window.location.hash == '#about') {
    $('##about-button').css('visibility', 'hidden') 
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('#about').css('visibility', 'hidden') 
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('#about-button').css('visibility', 'hidden') 
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    // $('.navigation-wrapper').toggleClass('visible')
    $('#about-button').css('visibility', 'hidden') 
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })  
})
