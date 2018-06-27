<?php
/*
Template Name: Footer - Подвал
*/
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
	}elseif ($id == '10077'){
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

		<!-- Ресурсы страницы-->
<?php if ( current_user_can( 'manage_options' ) ) { ?>
<div style="position:fixed;z-index:999;top:50px;left:5px;padding:5px;font-size:7pt;color:#fff;background:#000;">
<?php echo '<h6 style="font-size:7pt; margin:0">Loading time:'; timer_stop(1); echo 's/</h6>' ?>
<?php echo '<h6 style="font-size:7pt; margin:0">Queries: '.get_num_queries().' /</h6>'; ?>
<?php if (function_exists('memory_get_usage')) echo '<h6 style="font-size:7pt; margin:0">Memory used: '.round(memory_get_usage()/1024/1024, 2) . 'MB</h6>'; ?>
</div>
<?php } ?>

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
		<?php if(get_the_ID() == '10077'){?>
		<script src="<?php bloginfo('template_url')?>/js/manage_sub.js"></script>
		<?php }else if(get_the_ID() == '235'){ ?>
		<script src="<?php bloginfo('template_url')?>/js/sub.js"></script>
		<?php };?>

        <script src="<?php bloginfo('template_url')?>/js/owlcarousel/owl.carousel.min.js"></script>
        <?php if(!in_category(14)):?>
		<script src="<?php bloginfo('template_url')?>/js/fancybox/jquery.fancybox.pack.js"></script> 
		<?php endif; ?>
        <script src="<?php bloginfo('template_url')?>/js/masked.input.js"></script>
        <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/jqcloud.min.css?v=2">
        <script src="<?php bloginfo('template_url')?>/js/jqcloud.min.js"></script>
        <script src="<?php bloginfo('template_url')?>/js/main_new.js?v=2"></script>
		<script src="<?php bloginfo('template_url')?>/js/table_js.js"></script>
		<?php the_field('yandex_metrika', 'options')?>
		<?php the_field('google_analitics', 'options')?>

		<script>
		function enableSubscrBtn(){
			document.querySelector('input[type="submit"].mailpoet_submit').disabled = false;
		};			
		</script>

		<script>
			/*$( "#btnSearch" ).click(function() {
				varr = $('#searchform input#s').val();
				console.log(varr);
			});*/
			function searchTrim(){
				search_str = document.getElementById("s").value;
				len = search_str.length - 1;
				if ( search_str.indexOf(' ', len) != -1) {
					search_str = search_str.substr(0,len);
				}
				if ( search_str.indexOf(' ', 0) != -1) {
					search_str = search_str.substr(1,search_str.length);
				}
				document.getElementById('s').value = search_str;
				console.log(document.getElementById("s").value);
			}
			document.getElementById("btnSearch").onclick = searchTrim;

			var but = document.getElementById("btnSearch");
			but.setAttribute("disabled", "disabled");
			document.getElementById("s").addEventListener("input", function(){
				var search_str = document.getElementById("s").value;
				if(search_str.length != 0) {
					but.disabled = false;
				} else {
					but.setAttribute("disabled", "disabled");
				}
			});
		</script>
    </body>
</html>