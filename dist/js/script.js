
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

});


// ドロップダウンメニューの表示制御
$('.l-header__nav--item--dropdown button').hover(
  function() {
    $(this).siblings('.l-header__dropdown').fadeIn(200).addClass('show');
  },
  function() {
    // マウスが離れた時にすぐ消えないよう少し遅延
    let $dropdown = $(this).siblings('.l-header__dropdown');
    setTimeout(function() {
      if (!$dropdown.is(':hover')) {
        $dropdown.fadeOut(200).removeClass('show');
      }
    }, 300);
  }
);

// ドロップダウンメニュー自体のホバー制御
$('.l-header__dropdown').hover(
  function() {
    $(this).show().addClass('show');
  },
  function() {
    $(this).fadeOut(200).removeClass('show');
  }
);
