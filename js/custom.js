$(document).ready(function(){

  $('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
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
        scrollTop: target.offset().top -70
      }, 1000, function() {
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

    //======================= button filter start =======================
    var containerEl = document.querySelector('.mixit');
    var mixer = mixitup(containerEl, {
        animation: {
            duration: 1000
        }
    });
    //======================= button filter end =======================
    //======================= video pop up start =======================
    new VenoBox({
        selector: '.venobox',
        autoplay:false,
    });
    //======================= video pop up end =======================
    //======================= counter up start =======================
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    //======================= counter up end =======================
    //======================= slick slider start =======================
    $('.post-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
        centerMode:true,
        centerPadding:0,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode:false
            }
          },
        ]
      });
    //======================= slick slider end =======================
    //======================= smooth start =======================
 

    //======================= smooth end =======================
    //======================= bg back-t-top start =======================
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop:0}, 800);
    });
    
    $(window).scroll(function(){
		var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(scrolling > 500){
          $('.back-to-top').slideDown(1000);
        }
        else{
          $('.back-to-top').slideUp(1000);
        }
    });
    
    //======================= bg back-t-top end =======================
    // ====================== typed js ============================
		$(".typed").typed({
			strings: ["Template", "Template", "Template"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 30,
			// time before typing starts
			startDelay: 1200,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: true,
			// false = infinite
			loopCount: 5,
			// show cursor
			showCursor: false,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
    // ======================== preloader start ================================
  $(window).on('load',function(){
    $('#preloader').delay(800).fadeOut(800);
  });
// =========================== preloader end ================================
      
});