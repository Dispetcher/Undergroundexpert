<?php get_header();
/*
Template Name: Страница отписки на рассылку
*/
$cl = pll_current_language();
?>
<div class="subscribe_content unsub_content">
	<div class="subscribe_content__block">
		<div class="unsubscribe_sc_content__block__form">
			<h4 class="subscribe_sc_content_font unsub_sc_frst">
				Очень жаль, но вы больше не сможете 
			</h4>
			<h4 class="subscribe_sc_content_font unsub_sc_frst">
				получать подборку лучших материалов
			</h4>
			<h4 class="subscribe_sc_content_font unsub_sc_scnd">
				 о подземном проектировании и строительстве
			</h4>
			<h3 class="subscribe_sc_content_font unsub_sc_thrd">
				от портала "Подземный эксперт"
			</h3>
			<h3 class="subscribe_sc_content_font unsub_sc_forth">
				undergroundexpert.info
			</h3>
			<h4 class="subscribe_sc_content_font unsub_sc_fifth">
				Мы много работаем над улучшением работы портала и будем признательны, если вы сообщите нам причину, по которой больше не хотите получать наши письма:
			</h4>
					
			<?php echo do_shortcode('[contact-form-7 id="10032" title="Обратная связь для отписки"]'); ?>
				
			<h6 class="subscribe_sc_content_font unsub_sc_footer">
				Чтобы снова оформить подписку <a href="http://undergroundexpert.info/podpisatsya-na-rassylku/">перейдите по ссылке</a>
			</h6>
		</div><!--/.subscribe_sc_content__block__form-->
	</div><!--/.subscribe_content__block-->		
</div><!--/.subscribe_content-->	
<?php get_footer();?>