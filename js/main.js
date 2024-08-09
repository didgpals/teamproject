$(function () {
  $(".partner ul li").mouseenter(function () {
    $(this).css({ filter: "none" });
  })
  $(".partner ul li").mouseleave(function () {
    $(this).css({ filter: "grayscale(1)" });
  })
})