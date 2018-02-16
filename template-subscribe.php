<?php 
/*
Template Name: Подписаться на рассылку
*/
get_header();?>
<?php get_template_part('includes/breadcrumbs')?>
 <div id="content_section">
   <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column subscribe_page">
                <h1 class="block_title big"><?php the_title('')?></h1>
                <div class="page_content">
                    <div class="subscribe_agree_form">   
						<?php 
						//es_subbox($namefield = "YES", $desc = "", $group = "Public"); 
					    	$subscribe_html = do_shortcode('[email-subscribers namefield="YES" desc="" group="Public"]');
							$cl = pll_current_language();
							$PDprocess = "i_agree_pd_process-eng";
							if ($cl == 'ru') {
								$subscribe_html = str_replace('Name</label>','Имя</label>', $subscribe_html);
								$subscribe_html = str_replace('value="Subscribe"','value="Подписаться"', $subscribe_html);
								$PDprocess = "i_agree_pd_process";
							}
							echo $subscribe_html;
						?>

<!--<div class="subscribe_content">
	<div class="subscribe_content__block">
		<div class="subscribe_content__block__form">
			<h3 class="subscribe_content_font sub_head">
				Теперь самые интересные статьи и новости
			</h3>
			<h4 class="subscribe_content_font sub_second">
				подземного строительства и проектирования в почте!
			</h4>
			<span class="subscribe_content_font sub_above_field">Остался всего один шаг, укажите свой email:</span>
	<?php		
	/*	$form_widget = new \MailPoet\Form\Widget();
			echo $form_widget->widget(array('form' => 2, 'form_type' => 'php'));	*/
	?>
		</div>
	</div>		
-->		
		
						<?php
						$cl = pll_current_language();
						//if ($cl == 'ru') {
						/*	$form_widget = new \MailPoet\Form\Widget();
							echo $form_widget->widget(array('form' => 2, 'form_type' => 'php'));	
							$PDprocess = "i_agree_pd_process";
					/*	}else{
						$form_widget = new \MailPoet\Form\Widget();
						echo $form_widget->widget(array('form' => 3, 'form_type' => 'php'));
						$PDprocess = "i_agree_pd_process-eng";
						};*/
						?>
					</div>
				<div class="subscribe_agree_wrap">
						<div class="subscribe_agree_head">
							<label for="subscribe_agree_check">
								<input type="checkbox" name="subscribe_agree_check" id="subscribe_agree_check">
								<?php     the_field($PDprocess, 'options');?>
							</label>
							<span class="open_subscribe_text"></span>
						</div>
						<div class="subscribe_agree_content">
							<?php if (have_posts()) : ?>
								<?php while (have_posts()) : the_post(); ?>
									<?php the_content(''); ?>
								<?php endwhile; ?>
							<?php else : ?>
								<h2 align="center"><?php echo ($cl == 'ru') ? "Не найдено" : "Not found"; ?></h2>
							<?php endif;           ?>
						</div>					
					</div>
                </div><!--/.page_content-->
       </div><!--/.dtc.content_column-->
    		  <?phpget_sidebar();?>
       </div><!--/.dt-->
 </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>