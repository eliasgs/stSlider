/**
 * stSlider plugin
 */
(function ($){
  $.fn.stSlider = function (options){
    var settings = $.extend({
      move: 1
    }, options);
    return this.each(function (){
      var items   = $('.st-slider-item', $(this));
      var wrapper = $('.st-slider-wrapper', $(this));
      var prev    = $('.st-slider-prev', $(this));
      var next    = $('.st-slider-next', $(this));
      // width of slider item - including margin
      var w = items.width()+parseInt(items.css('margin-right'),10);
      // the number of items that can fit in the wrapper
      var n = Math.round(wrapper.width()/w) ;
      
      // prev button moves items to the right
      prev.click(function (){
        // items should not move beyond limit
        var limit = 0;
        // get the items curent left position - relative to parent
        var left = Math.round(items.position().left);
        // only move in grid (i.e. in chunks of w)
        var _left = (Math.ceil(left/w)+settings.move)*w;
        if (_left<=limit){
          items.css({left: _left});
        }
        else{
          items.css({left: limit});
        }
      });
      // next button moves items to the left
      next.click(function (){
        var limit = (n-items.length)*w;
        var left = Math.round(items.position().left);
        var _left = (Math.floor(left/w)-settings.move)*w;
        if (_left>=limit){
          items.css({left: _left});
        }
        else{
          items.css({left: limit});
        }
      });
    });
  };
})(jQuery);
