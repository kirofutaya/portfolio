$(function(){
// ローディング
 $(function() {
 var h = $(window).height();
  $('#loading__wrapper').css('display','none');
  $('#is-loading ,#loading').height(h).css('display','block');
 });

 $(window).load(function () {
  $('#is-loading').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
  $('#loading__wrapper').css('display', 'block');
  $('.site-title').delay(1000).fadeIn(2500);
 });

 $(function(){
  setTimeout('stopload()',10000);
  });

  function stopload(){
   $('#loading__wrapper').css('display','block');
   $('#is-loading').delay(900).fadeOut(800);
   $('#loading').delay(600).fadeOut(300);
   $('.site-title').delay(1000).fadeIn(2500);
  }

// サイトタイトルのフェードイン
  // $('.site-title').ready(function(){
  //   $('.site-title').delay(900).fadeIn(2000);
  // });


// セクションタイトルのフェードイン（横から）
  $(window).scroll(function (){
        $('.fadeinLeft').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 500){
                $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function (){
          $('.fadeinRight').each(function(){
              var elemPos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight + 500){
                  $(this).addClass('scrollin');
              }
          });
      });

//トップまで戻るスクロールボタン
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });

//各セクションへのスクロールボタン
    // トップへ
    $(".back-to-top").click(function() {
        $("body,html").animate({scrollTop:0},800);
        return false; // 800msかけて上に戻る
    });
    // 各セクションへ
    $(".to-profile, .to-contact").click(function() {
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      position = position - 30;
      $("body,html").animate({scrollTop:position},800); // 800msかけて上に戻る
      return false;
    });
        // return falseにするとアンカーリンクがなくなる！



//セクションのスクロールイン
    var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
    var slideContsRect = []; // 要素の位置を入れるための配列
    var slideContsTop = []; // 要素の位置を入れるための配列
    var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
    var windowH = window.innerHeight; // ウィンドウの高さを取得
    var remainder = 400; // ちょっとはみ出させる部分
    // 要素の位置を取得
    for (var i = 0; i < slideConts.length; i++) {
      slideContsRect.push(slideConts[i].getBoundingClientRect());
    }
    for (var i = 0; i < slideContsRect.length; i++) {
      slideContsTop.push(slideContsRect[i].top + windowY);
    }
    // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
    window.addEventListener('resize', function () {
      windowH = window.innerHeight;
    });
    // スクロールされたら
    window.addEventListener('scroll', function () {
      // スクロール位置を取得
      windowY = window.pageYOffset;

      for (var i = 0; i < slideConts.length; i++) {
        // 要素が画面の下端にかかったら
        if(windowY > slideContsTop[i] - windowH + remainder) {
          // .showを付与
          slideConts[i].classList.add('show');
        } else {
          // 逆に.showを削除
          slideConts[i].classList.remove('show');
        }
      }
    });


});
