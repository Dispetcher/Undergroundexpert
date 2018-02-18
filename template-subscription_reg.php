<?php get_header();
/*
Template Name: Страница успешной регистрации на подписку
*/
$cl = pll_current_language();
?>
<div class="subscribe_content">
	<div class="subscribe_content__block">
		<div class="subscribe_content__block__form">
			<h3 class="subscribe_content_font reg_head">
				Регистрация прошла успешно!
			</h3>
			<p class="subscribe_content_font reg_cont">	В течение нескольких минут на указанный адрес электронной почты придет письмо.</p>
			<p class="subscribe_content_font reg_cont">	Пожалуйста, перейдите по указанной в нем ссылке для подтверждения подписки.</p>
			<p class="subscribe_content_font reg_cont reg_rows"> Если вы не видите письмо в почтовом ящике, проверьте папку со спамом.</p>
			<p class="subscribe_content_font reg_cont reg_rows">Если письмо не пришло, напишите нам на почту <a href="mailto:news@undergroundexpert.ru">news@undergroundexpert.ru</a></p>
			
		</div><!--/.subscribe_content__block__form-->
	</div><!--/.subscribe_content__block-->		
</div><!--/.subscribe_content-->	

<?php get_footer();?>