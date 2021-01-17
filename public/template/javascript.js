$(document).ready(function() {
    var aboveHeight = $('.container-fix').outerHeight();
        $(window).scroll(function(){
            if ($(window).scrollTop() > aboveHeight){
            $('.container-fix').addClass('fix');
            } else {
           $('.container-fix').removeClass('fix');
            }
        });
    var stt = 0;
    var endImg = $(".slide:last").attr("idx");
        $("#next").click(function () {
            if (++stt > endImg) {
                stt = 0;
            }
            $(".slide").hide();
            $(".slide").eq(stt).fadeIn(500);
        });
        
        $("#prev").click(function () {
            if (--stt < 0) {
                stt = endImg;
            }
            $(".slide").hide();
            $(".slide").eq(stt).fadeIn(500);
        });
        var interval;
        var timer = function () {
            interval = setInterval(function () {
                $("#next").click();
            }, 5000);
        };
    timer();
    $('input.input-qty').each(function() {
        var $this = $(this),
          qty = $this.parent().find('.is-form'),
          min = Number($this.attr('min')),
          max = Number($this.attr('max'))
        if (min == 0) {
          var d = 0
        } else d = min
        $(qty).on('click', function() {
          if ($(this).hasClass('minus')) {
            if (d > min) d += -1
          } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
          }
          $this.attr('value', d).val(d)
        })
      })
    });
