//漢堡菜單
function myFunction(x) {
  x.classList.toggle("change");
}
$(document).ready(function(){
  $("#flip").click(function(){
      $("#panel").slideToggle("slow");
  });
  $("#flipA").click(function(){
      $("#panelA").slideToggle("slow");
  });
  $( ".arrow-icon" ).click(function() {
      $(this).toggleClass("open");
  });
});

//Top按鈕
$(document).ready(function () {
  // 捲軸偵測距離頂部超過 20 才顯示按鈕
  $(window).scroll(function () {
      if ($(window).scrollTop() > 20) {
          if ($(".back-top").hasClass("hide")) {
              $(".back-top").toggleClass("hide");
          }
      } else {
          $(".back-top").addClass("hide");
      }
  });

  // 點擊按鈕回頂部
  $(".back-top").on("click", function (event) {
      $("html, body").animate({
          scrollTop: 0
          },
          500 // 回頂部時間為 500 毫秒
      );
  });
  //其它連到對應區塊
  $("a").on("click", function () {
      var hrefLink = $(this).attr("href");
      console.log(hrefLink);
      $("html,body").animate({
          scrollTop: $(hrefLink).offset().top //直接到相對位置
          },
          800
      );
  });
});
// 輪播
window.onload = function () {
  let slideIndex = 1;
  showSlide(slideIndex);

  let prev = document.getElementById("prev");
  prev.addEventListener("click", divideSlides, false);

  let next = document.getElementById("next");
  next.addEventListener("click", plusSlides, false);

  const selectdot = document.querySelectorAll(".dot");
  for (let i = 0; i < selectdot.length; i++) {
    selectdot[i].addEventListener("click", function (e) {
      showSlide((slideIndex = i + 1));
    });
  }

  function plusSlides() {
    showSlide((slideIndex += 1));
  }

  function divideSlides() {
    showSlide((slideIndex -= 1));
  }

  function currentSlide(n) {
    showSlide((slideIndex = n));
  }

  function showSlide(num) {
    let slides = document.getElementsByClassName("slide__item");
    let dots = document.getElementsByClassName("dot");
    console.log(num);
    if (num > slides.length) {
      slideIndex = 1;
    }

    if (num < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }
  setInterval(function () {
    plusSlides();
  }, 8000);
 
};

