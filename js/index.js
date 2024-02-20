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
        },800
        );
    });
});
// 輪播
$('.container').slick({
  dots:true,
  fade:true,
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true
});

