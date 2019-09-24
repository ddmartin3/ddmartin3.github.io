$(document).ready(function(){
  var header = $('#main-header');
  
  var backgrounds = new Array(
      'url(./img/tucson-mtn-park.jpg)'
    , 'url(./img/durangotosilverton.jpg)'
    , 'url(./img/teslajuice.jpg)'
    , 'url(./img/tucson-mtn-park.jpg)'
    , 'url(./img/moab-approach.jpg)'
    , 'url(./img/snowzero.jpg)'
    , 'url(./img/tucson-mtn-park.jpg)'
    , 'url(./img/helmets.jpg)'
    , 'url(./img/fireyfurnace.jpg)'
    , 'url(./img/vfr-drone-badlands.jpg)'
    , 'url(./img/tucson-mtn-park.jpg)'
  );
  
  var current = 0;
  
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      header.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 15*1000);
  
  header.css('background-image', backgrounds[0]);
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

})(jQuery); // End of use strict
