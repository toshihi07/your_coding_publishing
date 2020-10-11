$(function () {
  $("#acMenu #acSwitch").on("click", function() {
    $(this).next().slideToggle();
    });

    $("#acMenu #acLastSwitch").on("click", function() {
      $(this).next().slideToggle();
      $(this).toggleClass("no-border");
      });

      jQuery("my-form").submit(function (event) {
        event.preventDefault();
      
        let baseUrl = "https://docs.google.com/forms/u/0/d/e/xxxxxxxxx/formResponse";
        let name = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
        let mail = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
        let content = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
        let radio = jQuery("[name=\"entry.xxxxxxxxx\"]:checked").val();
        /* チェックボックスは数分だけ作る */
        let checks = ["", "", "", ""];
        let count = 0;
        jQuery("[name=\"entry.xxxxxxxxx\"]:checked").each(function() {
          checks[count] = jQuery(this).val();
          count++;
        });
        let select = jQuery("[name=\"entry.xxxxxxxxx\"]").val();
      
        jQuery.ajax({
            url: baseUrl,
            data: {
              "entry.xxxxxxxxx": name,
              "entry.xxxxxxxxx": mail,
              "entry.xxxxxxxxx": content,
              "entry.xxxxxxxxx": radio,
              "entry.xxxxxxxxx": checks[0],
              "entry.xxxxxxxxx": checks[1],
              "entry.xxxxxxxxx": checks[2],
              "entry.xxxxxxxxx": checks[3],
              "entry.xxxxxxxxx": select,
            },
            type: "POST",
            dataType: "xml",
        }).always((jqXHR, textStatus, errorThrown) => {
          window.location.href = "thsnks.html";
        });
        return false;
      });
});

https://docs.google.com/forms/u/1/d/e/1FAIpQLSfwbKSBc2pzHF3AUGfGOvyauDKL0J76eXMLcribOb45vseM3w/formResponse


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
})
