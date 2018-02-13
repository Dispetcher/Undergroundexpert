<?php get_header();
/*
Template Name: Страница отписки на рассылку
*/
$cl = pll_current_language();
$post_views = get_field('views_num');
update_field('views_num', ++$post_views, $post->ID);
?>
<?php get_template_part('includes/breadcrumbs')?>
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <div class="post_content_holder">
					<h1 class="block_title big"><? if($cl == 'ru'):?> Вы успешно отписались от рассылки<?; else:?> You successfully unsubscribed<?;endif;?></h1>
						<div class="print_version">
							<?php if(function_exists('wp_print')) { print_link($printVersion); } ?>
							<a href="#send_to_email" class="send_to_email"><?=$sendEmail?></a>
							<div class="dtc vat article_date"><p><?php the_time('F, Y')?></p></div>
						</div>
						<div class="page_content">
 						<?php if($cl == 'ru'){?>
							<p>Вы успешно отписались от рассылки информационного портала «Подземный эксперт» <a href="http://undergroundexpert.info" >www.undergroundexpert.info</a></p>
						<p>Мы много работаем над улучшением работы портала и будем признательны, если вы сообщите нам причину, по которой больше не хотите получать наши письма:</p>	
						<?php echo do_shortcode('[contact-form-7 id="10032" title="Обратная связь для отписки"]'); ?>
						<p>Благодарим за помощь!</p>	
						<p>С уважением,</p>	
						<p>Редакция портала «Подземный Эксперт»</p>								
						<?php }else{?>
						<p>You successfully unsubscribed from <a href="http://undergroundexpert.info" >www.undergroundexpert.info</a> mailing list.</p>
						<p>We continuously work towards improving our website and we will be grateful if you could answer a few questions regarding the reasons you decided to unsubscribe:</p>
						<?php echo do_shortcode('[contact-form-7 id="10045" title="Unsubcription feedback"]');?>
						<p>Best regards, </p>
						<p>Underground Expert </p>
						<?php };?>
					</div><!--/.page_content-->
				<div class="dop_articles">
                    <p class="block_title">Дополнительные статьи</p>
                    <p>Выберите интересующую статью:</p>
						<p class="block_title"><?=$addArticles?></p>
						<p><?=$chooseArticle?></p>
							<div class="dop_article_blocks">
								<?php $current_post_id = $post->ID?>
								<?php query_posts('cat='.$first_level_parent_cat_id.'&posts_per_page=6&orderby=date&order=DESC'); ?>
								<?php while (have_posts()) : the_post(); ?>
									<?php if($post->ID != $current_post_id):?>
									<div class="dop_article_block">
										<div class="dt">
											<div class="dtc vat dop_article_img">
												<a href="<?php the_permalink()?>">
													<?php the_post_thumbnail('mini-thumb')?>
												</a>
											</div>
											<div class="dtc vat dop_article_info">
												<p><a href="<?php the_permalink()?>"><?php the_title()?></a></p>
												<?php
												if ($cl == 'ru') {
													$date_str = get_the_time('j.n.Y',$popular_post->ID);
													$date_arr = explode('.', $date_str);
													$months = array(
														1 => 'января',
														2 => 'февраля',
														3 => 'марта',
														4 => 'апреля',
														5 => 'мая',
														6 => 'июня',
														7 => 'июля',
														8 => 'августа',
														9 => 'сентября',
														10 => 'октября',
														11 => 'ноября',
														12 => 'декабря',
													);
													$post_date = $date_arr[0] . ' ' . $months[$date_arr[1]] . ', ' . $date_arr[2];
												} else {
													$post_date = get_the_time('F j, Y');
												}	
												?>
												<p class="dop_article_date"><?php echo $post_date?></p>
											</div>
										</div><!--/.dt-->
									</div><!--/.dop_article_block-->
									<?php endif;?>
								<?php endwhile; ?>
								<?php wp_reset_query(); ?>
							</div><!--/.dop_article_blocks-->
						</div><!--/.dop_articles-->

					</div>
				</div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>