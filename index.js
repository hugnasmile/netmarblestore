$('.banner').slick({
    dots: true, // 하단 paging 버튼 노출 (true는 노출/false 노출안됨)
    autoplay: true, //자동 플레이 
    autoplaySpeed:3000, // 자동플레이 1000 = 1초
    arrows: true, //좌우 화살 버튼 비노출(false는 비노출 / true는 노출)
  });


  $('.best_item .item_container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $('.recommend .img_container').slick({
    dots: true, // 하단 paging 버튼 노출 (true는 노출/false 노출안됨)
    arrows: true, //좌우 화살 버튼 비노출(false는 비노출 / true는 노출)
  });


    jQuery(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#backToTop').fadeIn(500);
        } else {
          $('#backToTop').fadeOut('slow');
        }
      });
      $('#backToTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 200);
      });
    });