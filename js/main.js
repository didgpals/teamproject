$(function () {
  $(".partner ul li").mouseenter(function () {
    $(this).css({ filter: "none" });
  })
  $(".partner ul li").mouseleave(function () {
    $(this).css({ filter: "grayscale(1)" });
  });
});

$(window).scroll(function(){
  let scrollTop = $(window).scrollTop()
  if(scrollTop > 750){
    $("#header").css({position:"fixed", width:"100%" ,background:"#020318"})
    $(".visual_banner").css({marginTop:100});
  }else{
    $("#header").css({position:"absolute",background:"transparent"});
    $(".visual_banner").css({marginTop:0});
  }
});
let delay = 300;
let timer = null;

$(window).on("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    console.log('resize event!');
    if ($(window).innerWidth() > 1024) {
      $(".more_btn").hide();
      $(".close_btn").hide();
      $(".partner ul li").show();
    } else if ($(window).innerWidth() > 600 || $(window).innerWidth() < 1024) {
      $(".more_btn").show();
      $(".more_btn").click(function () {
        $(".partner ul li:nth-child(n+9)").fadeIn();
        $(".more_btn").hide();
        $(".close_btn").show();
      });
      $(".close_btn").click(function () {
        $(".partner ul li:nth-child(n+9)").fadeOut();
        $(".more_btn").show();
        $(".close_btn").hide();
      })
    } else if ($(window).innerWidth() <= 600) {
      $(".more_btn").show();
      $(".more_btn").click(function () {
        $(".partner ul li:nth-child(n+9)").fadeIn();
        $(".more_btn").hide();
        $(".close_btn").show();
      });
      $(".close_btn").click(function () {
        $(".partner ul li:nth-child(n+9)").fadeOut();
        $(".close_btn").hide();
        $(".more_btn").show();
      })
    } {

    }
  }, delay);

})