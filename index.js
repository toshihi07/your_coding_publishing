$(function () {
  $("#acMenu #acSwitch").on("click", function() {
    $(this).next().slideToggle();
    });

    $("#acMenu #acLastSwitch").on("click", function() {
      $(this).next().slideToggle();
      $(this).toggleClass("no-border");
      });
});

$('#form').submit(function (event) {
  var formData = $('#form').serialize();
  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfwbKSBc2pzHF3AUGfGOvyauDKL0J76eXMLcribOb45vseM3w/formResponse",
    data: formData,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        // $(".end-message").slideDown();
        // $(".submit-btn").fadeOut();
        window.location.href = "thanks.html";
      },
      200: function () {
        $(".false-message").slideDown();
      }
    }
  });
  event.preventDefault();
});

var Swiper = new Swiper('.swiper-container', {
  autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
  },
  centeredSlides: true,
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: false,
    },
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    }
  }
})

$(function(){
  var headerHight = 87;
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({scrollTop:position}, 550, "swing");
    return false;
});
});
