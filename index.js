$(function () {
  //ページ内リンクのアニメーション
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //ハンバーガーメニューのアニメーション
  $(".burger-btn").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".nav-wrapper").fadeToggle(300);
    $("body").toggleClass("noscroll");
  });

  //ハンバーガーメニューに重なったアイテム消す処理
  $(".burger-btn").on("click", function () {
    $(
      ".more-btn,.about-area,.floating-menu,.item,.section-title,.shop-item-container,.back-to-top,.follow-us,.footer"
    ).toggleClass("erase");
    $("about-area").fadeToggle(300);
  });

  //固定メニューがフッター手前で消える処理
  $(window).on("scroll", function () {
    documentHeight = $(document).height();
    scrollPosition = $(this).height() + $(this).scrollTop();
    footerHeight = $("#follow-us").innerHeight();

    if (documentHeight - scrollPosition <= footerHeight) {
      $(".floating-menu").css({
        position: "absolute",
        bottom: footerHeight + 0,
      });
    } else {
      $(".floating-menu").css({
        position: "fixed",
        bottom: 0,
      });
    }
  });
});
