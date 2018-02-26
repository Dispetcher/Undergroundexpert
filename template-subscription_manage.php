<?php get_header();
/*
Template Name: Страница управления подпиской
*/
$cl = pll_current_language();
?>
<div class="subscribe_content">
	<div class="subscribe_content__block">
		<div class="subscribe_content__block__form">
			<h3 class="subscribe_content_font mn_head">
				Управление подпиской 
			</h3>
			<h4 class="subscribe_content_font mn_above">
				Для смены регистрационных данных, воспользуйтесь формой ниже:
			</h4>
			<?php echo do_shortcode('[mailpoet_manage_subscription]');?>

			<?php echo do_shortcode('[contact-form-7 id="10032" title="Обратная связь для отписки"]'); ?>
			
		</div><!--/.subscribe_content__block__form-->
	</div><!--/.subscribe_content__block-->		
</div><!--/.subscribe_content-->	

<?php get_footer();?>