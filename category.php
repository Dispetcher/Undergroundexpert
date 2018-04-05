<?php 
get_header();
$cl = pll_current_language();
if ($cl == 'ru') {
	$newArticels = "Новые материалы";
} else {
	$newArticles = "New materials";
}
?>
<?php get_template_part('includes/breadcrumbs')?>
<?php $current_cat = get_category($cat);?>
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <div class="main_page_blog">
                    <h1 class="block_title big"><?php if(get_field('seo_h1', 'category_'.$cat)): the_field('seo_h1', 'category_'.$cat); else: single_cat_title(); endif;?></h1>
                    <div class="cat_search_wrap clearfix">
                        <?php get_template_part('includes/search_in_cat')?>
                        <?php 
							if(0 == $current_cat->parent):
								get_template_part('includes/parent_cat_tabs');
							else:
								get_template_part('includes/child_cat_tabs');
							endif;
						?>
					</div><!--/.cat_search_wrap-->
                    <?php if(get_field('show_choose_region', 'category_'.$cat)):?>   
						<?php get_template_part('includes/choose_region')?>
					<?php endif;?>
					<?php get_template_part('includes/cat_main_article')?>
					<p class="block_title no_border tac"><?=$newArticles?></p>
					<div class="main_page_blocks">
						<?php 
							$args = array (
								'post_type' => 'post',
								'posts_per_page' => get_field('articles_count', 'category_'.$cat),
								'offset' => 0,
								'cat' => $cat,
								'category__not_in' => array(20), //20 - Календарь мероприятий
								'post_status'      => 'publish',
							);
							$cat_posts = get_posts($args);
							$cat_posts_num = count($cat_posts);
							global $posts_query;
							$posts_query = new WP_Query($args);
							while ($posts_query->have_posts()) : $posts_query->the_post(); ?>
								<div class="main_page_block">
									<div class="main_page_block_img">
										<a href="<?php the_permalink();?>"><?php the_post_thumbnail('catalog-thumb')?></a>
											<?php
												$parent_cats = get_the_category($post->ID); //Получили список родительских категорий поста
												$first_level_parent_cat_id = -1; //Ищем ID родительской категории первого уровня
												$first_level_parent_cat_name = '!';
												foreach($parent_cats as $parent_cat):
													if($parent_cat->parent == 0) {
														$first_level_parent_cat_id = $parent_cat->term_id;
														$first_level_parent_cat_name = $parent_cat->name;
													}
												endforeach;
												$colors = array ( //Массив цветов для подложки названия категории
													2 => 'green', //категория Опыт подземного строительства
													3 => 'blue', //категория Метрополитены мира и РФ
													4 => 'violet', //Исследования и технологии
													5 => 'red', //Исследования и технологии
												);
											?>
									</div><!--/.main_page_block_img-->
									<div class="main_page_block_info">
										<p class="main_page_block_title"><a href="<?php the_permalink();?>"><?php the_title()?></a></p>
										<p class="main_page_block_text"><?php echo the_excerpt();?></p>
									</div>
								</div><!--/.main_page_block-->
						<?php endwhile; wp_reset_postdata(); ?>
					</div><!--/.main_page_blocks-->
					<?php if($cat_posts_num > 6):?>
						<div class="button_to_center">
							<a class="button blue_button open_more" href="#" data-cat="<?php echo $cat?>"><?php if ($cl == 'ru'):?>Открыть ещё статьи<?php; else: ?>Open more<? ; endif; ?></a>
							<a class="button blue_button hide_articles hidden" href="#" ><?php if ($cl == 'ru'):?>Свернуть статьи<?php; else: ?>Hide articles<? ; endif; ?></a>
						</div>
					<?php endif;?>
                </div><!--/.main_page_blog-->
				
                <?php 
				if($current_cat->parent != 0) {
					$current_cat = $current_cat->parent;
				}
				if($current_cat == 4):
					get_template_part('includes/publication_block');
				else:
					get_template_part('includes/subscribe');
				endif;
				?>
                <?php get_template_part('includes/cat_content')?>
            </div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>