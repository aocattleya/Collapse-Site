$(".right__top__content--icon").click(function () {
  $(".right__top__content--icon").addClass("animated bounceOutUp");
  setTimeout(function () {
    $(".left__content__follow").addClass("animated hinge");
    $(".left__content__follow").css("animation-duration", "2s");
  }, 1000);
  setTimeout(function () {
    $(".left__content__search").addClass("animated hinge");
    $(".left__content__search").css("animation-duration", "2s");
  }, 1200);
  setTimeout(function () {
    $(".right__top--img").addClass("animated hinge");
    $(".right__top--img").css("animation-duration", "2s");
  }, 2300);
  setTimeout(function () {
    $(".item").addClass("animated hinge");
    $(".item").css("animation-duration", "3s");
  }, 1500);
  setTimeout(function () {
    $(".right__top__content--text").addClass("animated hinge");
    $(".right__top__content--text").css("animation-duration", "2s");
  }, 1800);
  setTimeout(function () {
    $(".right__bottom__container").addClass("animated hinge");
    $(".right__bottom__container").css("animation-duration", "2s");
  }, 3700);
  setTimeout(function () {
    $(".right__bottom__text").css("animation-duration", "2s");
    $(".right__bottom__text").addClass("animated hinge");
  }, 4100);
  setTimeout(function () {
    $(".right__top__content--favorite").addClass("animated hinge");
    $(".right__top__content--favorite").css("animation-duration", "2s");
  }, 3100);
  setTimeout(function () {
    $(".heder-content").addClass("animated hinge");
    $(".heder-content").css("animation-duration", "2s");
  }, 5000);
});
