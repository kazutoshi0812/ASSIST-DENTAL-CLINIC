jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // 診療内容ボタンのクリックイベント
  $(document).on('click', '.c-contact__button', function() {
    $(this).toggleClass('is-active');
  });

  // ハンバーガーメニュー
  const $hamburger = $('.l-header__hamburger');
  const $headerInner = $('.l-header__inner');
  const $body = $('body');

  if ($hamburger.length) {
    $hamburger.on('click', function() {
      $(this).toggleClass('is-active');
      $headerInner.toggleClass('open');
      $body.toggleClass('is-drawerActive');
    });
  }

  // メニューリンクをクリックしたらドロワーを閉じる
  $('.l-header__nav--list a').on('click', function() {
    $hamburger.removeClass('is-active');
    $headerInner.removeClass('open');
    $body.removeClass('is-drawerActive');
  });

  // fade in
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();

    // .reason__inner--slide-left要素に対する処理
    $('.p-mv__image').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });
  });

});
