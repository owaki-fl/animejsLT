'use strict'
import anime from 'animejs'
;(function () {
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

    var init = function () {
      $block.each(function (i) {
        $(this).css('left', w * i)
      })
      pager()
      resize()
    }
    init()
  })
}($))
