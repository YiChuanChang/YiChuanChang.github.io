
$(window).scroll(function() {

    if ($(this).scrollTop() >= 100) { // this refers to window
        $('nav').addClass('active');
    } else {
        $('nav').removeClass('active');
    }
    $('.large-title').each(function() {
        if($(this).parent().isInViewport()){
            $(this).addClass('inview');
        }else{
            $(this).removeClass('inview');
        }
    });

    //    <a href="#project-container-cv">Projects</a><br>
    //    <a href="#experience-container">Experience</a><br>
    //    <a href="#about-container">About</a>
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerWidth();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$('.mega').paroller();
$(".text-wrap").paroller({ factor: 0.05, factorXs: -0.02, factorSm: 0.1, type: 'foreground' });  

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

