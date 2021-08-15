var swiper = new Swiper('#showcase .swiper-container', {
    // Optional parameters
    loop: true,
    speed: 2500,
    slidesPerView: 3,
    spaceBetween:30,
    autoplay: {
        delay:3000,
    },
    breakpoints: {
        // 500px以上の場合
        500: {
          slidesPerView: 1,
          spaceBetween:30,
        },
        // 768px以上の場合
        768: {
          slidesPerView: 2,
          spaceBetween:30,
        },
        // 1200px以上の場合
        1200: {
          slidesPerView: 3,
          spaceBetween:30,
        }
      }  
  })
  var swiper = new Swiper('#listing .swiper-container', {
    // Optional parameters
    loop: true,
    speed: 2500,
    slidesPerView: 5,
    spaceBetween:20,
    autoplay: {
        delay:5000,
    },
    breakpoints: {
        // 500px以上の場合
        500: {
          slidesPerView: 1,
        },
        // 768px以上の場合
        991: {
          slidesPerView: 3,
        },
        // 1200px以上の場合
        1200: {
          slidesPerView: 5,
        }
      }    
  })

  $(function(){
	$(window).scroll(function (){
		$('.cards-design').each(function(){
			const elemPos = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		    });
	    });
    })

   
    $(function() {
      $('.footer-img img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".footer-img img:first-child").fadeOut(2000);
        $(".footer-img img:nth-child(2)").fadeIn(2000);
        $(".footer-img img:first-child").appendTo(".footer-img");
      }, 4000);

    });


  