(function ($) {
    $(document).ready(function () {
    	//Subscription manage
		$('.mailpoet_paragraph:eq(0)').css('display', 'none');
		$('.mailpoet_paragraph:eq(4)').css('display', 'none');
		$('.mailpoet_paragraph:eq(5)').css('text-align', 'center');
		$('.mailpoet_text:eq(0)').css('margin-left','34px');
		$('.mailpoet_text').removeAttr('disabled');
		
		//Change selector
		$('.mailpoet_select option[value=subscribed]').html('Подписка оформлена');
		$('.mailpoet_select option[value=unsubscribed]').html('Подписка отменена');
	 });
	$(document).ready(mmedia);
	$(window).resize(mmedia);
	
	function mmedia(){
			if (window.matchMedia('(max-width: 445px)').matches) {
				$('.mailpoet_text:eq(0)').css('margin-left','24px');
				$('.mailpoet_text:eq(1)').css('margin-left','-10px');
			}else if(window.matchMedia('(max-width: 374px)').matches){
				$('.mailpoet_text:eq(0)').css('margin-left','24px');
				$('.mailpoet_text:eq(1)').css('margin-left','-10px');
			}else{
				$('.mailpoet_text:eq(0)').css('margin-left','34px');
				$('.mailpoet_text:eq(1)').removeAttr('style');
			}
	}
})(jQuery);