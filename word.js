/**
 * 文字输入字数限制插件
 * @param  wordMax 限制最大字数
 * @return errCss 超过字数显示的样式
 * @author  巴泰
 * 使用方法：$(element).wordCut({wordMax: 200, errCss: 'err'});
 */
;(function($){
  $.fn.wordCut = function(options){
    'use strict'
    var self = this,
        textArea = $(self).find('textarea');
    options = $.extend({wordMax: 200, errCss: 'err'}, options || {});
    $(self).append('<span>限制<b>'+options.wordMax+'</b>字以内</span>');
    textArea.keyup(function(){
      var wordValue = $(this).val(),
          wordTotal = wordValue.length,
          tips = $(self).find('span');
      if(wordTotal > options.wordMax){
         wordValue = wordValue.substring(0, options.wordMax);
         $(this).val(wordValue);
         tips.addClass(options.errCss);
        }else if(wordTotal < options.wordMax){
          tips.removeClass(options.errCss);
        }
        if(wordTotal === 0){
        tips.html('限制<b>'+options.wordMax+'</b>字以内');
        }else{
          tips.html('已输入<b>'+wordTotal+'/'+options.wordMax+'</b>字');
        }
    });
  }
})(jQuery);