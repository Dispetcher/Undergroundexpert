<?php 
/*
Template Name: Подписаться на рассылку
*/
get_header();
$cl = pll_current_language();?>

<div class="subscribe_content">
	<div class="subscribe_content__block">
		<div class="subscribe_content__block__form">
			<h3 class="subscribe_content_font sub_head">
				Только самые интересные материалы 
			</h3>
			<h4 class="subscribe_content_font sub_second">
				о подземном проектировании и строительстве!
			</h4>
			<h4 class="subscribe_content_font sub_above_field">Остался всего один шаг, укажите свой e-mail:</h4>
	<?php		
		$form_widget = new \MailPoet\Form\Widget();
			echo $form_widget->widget(array('form' => 2, 'form_type' => 'php'));	
	?>
			<span class="subscribe_content_font sub_under_field">Подписываясь на рассылку, вы подтверждаете свое согласие на <a href="http://undergroundexpert.info/politika-konfidentsialnosti/">обработку персональных данных</a></span>
			<h6 class="subscribe_content_font sub_under_field sub_mobile">Подписываясь на рассылку, вы подтверждаете свое согласие 	
			</h6>
			<h6 class="subscribe_content_font sub_under_field sub_mobile">на <a href="http://undergroundexpert.info/politika-konfidentsialnosti/">обработку персональных данных</a> 	
			</h6>

			<h6 class="subscribe_content_font sub_ft_field">Рассылки от портала «Подземный эксперт» приходят не чаще 1 раза в неделю 	
			</h6>
			<h6 class="subscribe_content_font sub_ft_field sub_ft">и содержат подборку лучших статей, опубликованных за последнее время.
			</h6>
			
			<h6 class="subscribe_content_font sub_ft_field sub_mb_ft">Рассылки от портала «Подземный эксперт» приходят не чаще одного раза в неделю и содержат подборку лучших статей, опубликованных за последнее время. 	
			</h6>
			
			<h4 class="subscribe_content_font sub_social_net">Следите за обновлениями портала «Подземный эксперт» в соцсетях!</h4>
			<div class="subscribe_content_font social_net">
				<h3 class="subscribe_content_font social_net__text">
					Присоединяйтесь к нам:
				</h3>
				<span>
				<a href="https://www.facebook.com/%D0%9F%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82-1405490429518955/" class="social_networks social_net__fb"></a>
				<a href="https://vk.com/uexpert" class="social_networks social_net__vk"></a>
				<a href="https://twitter.com/UExpertInfo" class="social_networks social_net__tw"></a>
				</span>
			</div>
		</div>
	</div>		
</div>	

<?php get_footer();?>