(function ($) {
    $(document).ready(mmedia);
	$(window).resize(mmedia);
	function mmedia(){
			if (window.matchMedia('(max-width: 329px)').matches) {
				$('.mailpoet_text').css({'max-width':'88vw','width':'88vw'});
				$('.mailpoet_submit').css({'max-width':'88vw','width':'88vw'});
				$('.mailpoet_form').css('display','block');
			}else if (window.matchMedia('(max-width: 479px)').matches) {
				$('.mailpoet_text').css({'max-width':'90vw','width':'90vw'});
				$('.mailpoet_submit').css({'max-width':'90vw','width':'90vw'});
				$('.mailpoet_form').css('display','block');
			}else if (window.matchMedia('(max-width: 599px)').matches) {
				$('.mailpoet_text').css({'max-width':'420px','width':'420px'});
				$('.mailpoet_submit').css({'max-width':'420px','width':'420px'});
				$('.mailpoet_form').css('display','block');
			}else if (window.matchMedia('(max-width: 767px)').matches) {
				$('.mailpoet_text').css({'max-width':'505px','width':'505px'});
				$('.mailpoet_submit').css({'max-width':'505px','width':'505px'});
				$('.mailpoet_form').css('display','block');
			}else{
				$('.mailpoet_text').removeAttr('style');
				$('.mailpoet_submit').removeAttr('style');
				$('.mailpoet_form').removeAttr('style');
			};
	};
})(jQuery);