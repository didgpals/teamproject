$(document).ready(function () {
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
  $("#cbx_chkAll").click(function () {
    if ($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
    else $("input[name=chk]").prop("checked", false);
  });

  $("input[name=chk]").click(function () {
    var total = $("input[name=chk]").length;
    var checked = $("input[name=chk]:checked").length;

    if (total != checked) $("#cbx_chkAll").prop("checked", false);
    else $("#cbx_chkAll").prop("checked", true);
  });

  $(".check_email").click(function () {
    alert("인증메일이 발송되었습니다.");
    $(this).text("재인증");
    setTimeout(function () {
      $(".check_email").css({ background: "url(../img/inzung.png)no-repeat right 16px center", fontSize: 0, top: 55 });
    }, 2000)
  });

  $(".check_phone").one("click", function () {
    alert("인증번호가 발송되었습니다.");
    $(this).text("재인증");
    $(".phone").append(`<input type="text" placeholder="인증번호를 입력하세요."/>`)
    $(".phone").append(`<span class="check_inzung" style="color:#157FD1">확인</span>`)
    $(".check_inzung").click(function () {
      $(".check_inzung").css({ background: "url(../img/inzung.png)no-repeat right 16px center", fontSize: 0, top: 115 })
    })
  });

});