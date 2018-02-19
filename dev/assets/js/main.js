'use strict'
import anime from 'animejs'
(function () {
  $(function () {
    var w = $(window).outerWidth()
    var l = $('.slide').length
    var $inner = $('.animejs-lt__inner')
    var $block = $('.slide')
    var $pager = $('.slide-count ul li')
    var count = 1
    var moves = -w * count
    var current = 0

    var pager = function () {
      $pager.on('click', function () {
        current = $(this).index()
        $pager.removeClass('current')
        $pager.eq(current).addClass('current')
        moves = -w * current
        anime({
          targets: '.animejs-lt__inner',
          translateX: moves,
          duration: '500',
          easing: 'easeOutQuad'
        })
      })
    }

    var resize = function () {
      $(window).on('resize', function () {
        w = $(window).outerWidth()
        moves = -w * current
        $block.each(function (i) {
          $(this).css('left', w * i)
        })
        $inner.css('transform', 'translateX(' + moves + 'px)')

        console.log(moves)
      })
    }

    // var TtlAnimation = function(){
    //   $('h1 .text-wrapper').each(function(){
    //     $(this).html($(this).text().replace(/(\S)/g, '<span class="letter">$1</span>'));
    //   });
    //   anime.timeline({
    //     complete: function(){
    //     }
    //   })
    //   .add({
    //     targets: 'h1',
    //     opacity: 1,
    //     delay:100
    //   })
    //   .add({
    //     targets: 'h1 .letter',
    //     translateY: ["1.1em", 0],
    //     translateZ: 0,
    //     opacity:1,
    //     duration: 1000,
    //     delay: function(el, i) {
    //       return 100 * i;
    //     }
    //   });
    // }
    //
    // var cover = function(){
    //   anime({
    //     targets: '.cover-anim',
    //     width: [{value:'200vw',duration:800,easing:'easeOutQuad'},{value:'200%'}],
    //     height: [{value:'200vw',duration:1500,easing:'easeOutQuad'},{value:'100%',duration:1000}],
    //     borderRadius:[{value:0,delay:900}],
    //     complete:function(){
    //       TtlAnimation();
    //     }
    //   })
    //   anime({
    //     targets: '.cover-bg',
    //     translateY: '-100%',
    //     delay:900
    //   })
    // }



    var init = function () {
      $block.each(function (i) {
        $(this).css('left', w * i)
      })
      pager()
      resize()
      // cover();
    }
    init()
  })
}($))
