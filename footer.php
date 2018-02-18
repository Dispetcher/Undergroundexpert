<?php
$cl = pll_current_language();
$id = get_the_ID();
if ($cl == "ru") {
	$menuFcolumn = "Нижнее меню. Столбец 1";
	$menuScolumn = "Нижнее меню. Столбец 2";
	$socialNetworks = "social_networks";
	$copyright = "copyright";
	$log_in = "Войти через соц. сети:";
	$comment = "Оставить комментарий:";
} else {
	$menuFcolumn = "Footer menu. Column 1";
	$menuScolumn = "Footer menu. Column 2";
	$socialNetworks = "social_networks-eng";
	$copyright = "copyright-eng";
	$log_in = "Log in via:";
	$comment = "Post the comment:";
}
?>
<?php if ($id == '235'){
	}elseif ($id == '10001'){
	}elseif ($id == '10005'){
	}elseif ($id == '10071'){
	}else{
?>

<footer id="footer">
            <div class="center_wrap">
                <div class="dt footerflex">
                    <div class="dtc vat footer_menu_1">
                        <ul>
                            <?php wp_nav_menu(array('menu' => $menuFcolumn, 'container' => '','items_wrap' => '%3$s')); ?>
                        </ul>
                    </div><!--/.dtc.footer_menu_1-->
                    <div class="dtc vat footer_menu_2">
                        <ul>
                            <?php wp_nav_menu(array('menu' => $menuScolumn, 'container' => '','items_wrap' => '%3$s')); ?>
                        </ul>			
                    </div><!--/.dtc.footer_menu_2-->
                    <div class="dtc vat footer_social">
                        <p><?php the_field($socialNetworks, 'options');?></p>
                        <?php if(get_field('face_link', 'options')):?><a href="<?php the_field('face_link', 'options')?>" class="face_link" target="_blank">Facebook</a><?php endif;?>
                        <?php if(get_field('vk_link', 'options')):?><a href="<?php the_field('vk_link', 'options')?>" class="vk_link" target="_blank">Вконтакте</a><?php endif;?>
                        <?php if(get_field('youtube_link', 'options')):?><a href="<?php the_field('youtube_link', 'options')?>" class="youtube_link" target="_blank">Youtube</a><?php endif;?>
                        <?php if(get_field('twitter_link', 'options')):?><a href="<?php the_field('twitter_link', 'options')?>" class="twitter_link" target="_blank">Twitter</a><?php endif;?>
                    </div>	
                </div><!--/.dt-->
				<p class="copyright">
				© 2012–<?php echo date('Y') . " "; the_field($copyright, 'options'); ?>	
				</p>
				<div>
						<img src="http://undergroundexpert.info/wp-content/uploads/2018/01/six-plus-img.png"> 
						</div>
            </div><!--/.center_wrap-->	
	        </footer><!--/#footer-->
		<span class="to_top">Наверх</span>
		<div class="hidden">
			
			<div id="send_to_email" class="popup">
				<p class="popup_title">Отправить статью на почту</p>
				<div class="popup_content">
					<form action="#">
						<input type="text" name="client_name" placeholder="Ваше имя" class="required">
						<input type="email" name="client_email" placeholder="Ваш email" class="required">
						<input type="hidden" name="post_id" value="<?php echo $post->ID?>">
						<input type="submit" value="Отправить">
						<p class="conf_agree">
							<span class="dt">
								<span class="dtc vat">
									<span class="agree checked"></span>
								</span>
								<span class="dtc vat">
									Настоящим подтверждаю, что я ознакомлен с политикой конфиденциальности <br>
									и согласен на обработку персональных данных. <a class="conf" href="#conf">Подробнее</a>
								</span>
							</span>
						</p>
					</form>
				</div>
			</div>
			<a href="#thanks" class="thank_link">Спасибо</a>
			<div id="thanks" class="popup thank_popup">
				<p class="popup_title"><?php if ($cl == "ru"): 'Спасибо!'; else: 'Thank you!'; endif;?></p>
				<div class="popup_content">
					<p>Статья отправлена на указанный email.</p>
					<p>Если вы не видите статью, <br>проверьте папку spam.</p>
				</div>
			</div>
			<a href="#social_authorization_popup"><?php echo($log_in);?></a>
			<div id="social_authorization_popup" class="popup">
				<p class="popup_title"><?php echo($comment);?></p>
				<div class="popup_content">
					<?php echo do_shortcode('[oa_social_login]')?>
				</div>
			</div>
			<div id="conf" class="popup">
				<p class="popup_title">Политика конфиденциальности</p>
				<div class="popup_content">
					<?php echo apply_filters('the_content', get_post_field('post_content', 15)); ?>
				</div>
			</div>
		</div>
<?php }; ?>

		<?php wp_footer()?>
        <script src="<?php bloginfo('template_url')?>/js/owlcarousel/owl.carousel.min.js"></script>
        <script src="<?php bloginfo('template_url')?>/js/fancybox/jquery.fancybox.pack.js"></script>
        <script src="<?php bloginfo('template_url')?>/js/masked.input.js"></script>
        <script src="<?php bloginfo('template_url')?>/js/main_new.js"></script>
		<script src="<?php bloginfo('template_url')?>/js/table_js.js"></script>
		<?php the_field('yandex_metrika', 'options')?>
		<?php the_field('google_analitics', 'options')?>
    </body>
</html>