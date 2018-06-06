<?php
$cl = pll_current_language();
$post_id = get_the_ID();
if ($cl == "ru") {
	$popularArticlesTitle = "popular_articles_title";
	$popularArticlesCount = "popular_articles_count";
	$popularArticlesExclude = "popular_articles_exclude";
	$sideBanners = "side_banners";
	$lastArticlesTitle = 'События месяца';
} else {
	$popularArticlesTitle = "popular_articles_title-eng";
	$popularArticlesCount = "popular_articles_count-eng";
	$popularArticlesExclude = "popular_articles_exclude-eng";
	$sideBanners = "side_banners-eng";
    $lastArticlesTitle = 'Latest articles';
}
// Определим id главной страницы (к ней привязаны значения полей)
$frontpage_id = get_option( 'page_on_front' );
?>
<div class="dtc vat sidebar <?php if($post_id == '235'): echo 'subsc';else: ''; endif; ?>">
	<div class="side_fixed">
		<div class="side_popular_articles">
			<p class="block_title"><?php the_field($popularArticlesTitle, $frontpage_id);?></p>
			<div class="side_popular_article_blocks">
				<?php $args = array(
						'posts_per_page'   => get_field($popularArticlesCount, $frontpage_id),
						'offset'           => 0,
						'orderby'          => 'meta_value_num',
						'order'            => 'DESC',
						'category__not_in' => get_field($popularArticlesExclude, $frontpage_id),
						'meta_key'         => 'views_num',
						'post_type'        => 'post',
						'post_status'      => 'publish',
						'suppress_filters' => true 
					);
					$popular_posts = get_posts( $args );
					foreach($popular_posts as $popular_post):										
				?>
					<div class="dt side_popular_article_block">
						<div class="dtc vat side_popular_article_block_img">
							<a href="<?php echo get_permalink($popular_post->ID)?>">
							<?php 
								$image_id = get_post_thumbnail_id($popular_post->ID);
								$image_url = wp_get_attachment_image_src($image_id, 'mini-thumb');
								$image_url = $image_url[0];
							?>
							<img src="<?php echo $image_url;?>" alt=""/>
							</a>
						</div><!--/.side_popular_article_block_img-->
						<div class="dtc vat side_popular_article_block_info">
							<p><a href="<?php echo get_permalink($popular_post->ID)?>"><?php echo $popular_post->post_title?></a></p>
							<?php
								if ($cl == "ru") {
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
							<p class="side_article_block_date"><?php echo $post_date?></p>
						</div>
					</div><!--/.side_popular_article_block-->
				<?php endforeach;?>
			</div><!--/.side_popular_article_blocks-->
		</div><!--/.side_popular_articles-->
        <div class="side_popular_articles">
            <p class="block_title"><?=$lastArticlesTitle?></p>
            <div class="side_popular_article_blocks">
                <?php 
				$args = array(
                    'posts_per_page'   => get_field($popularArticlesCount, $frontpage_id),
                    'offset'           => 3,
					'cat'			   => 18,
                    'orderby'          => 'date',
                    'order'            => 'DESC',
                    'category__not_in' => get_field($popularArticlesExclude, $frontpage_id),
                    'meta_key'         => 'views_num',
                    'post_type'        => 'post',
                    'post_status'      => 'publish',
                    'suppress_filters' => true
                );
                $popular_posts = get_posts( $args );
                foreach($popular_posts as $popular_post):
                    ?>
                    <div class="dt side_popular_article_block">
                        <div class="dtc vat side_popular_article_block_img">
                            <a href="<?php echo get_permalink($popular_post->ID)?>">
                                <?php
                                $image_id = get_post_thumbnail_id($popular_post->ID);
                                $image_url = wp_get_attachment_image_src($image_id, 'mini-thumb');
                                $image_url = $image_url[0];
                                ?>
                                <img src="<?php echo $image_url;?>" alt=""/>
                            </a>
                        </div><!--/.side_popular_article_block_img-->
                        <div class="dtc vat side_popular_article_block_info">
                            <p><a href="<?php echo get_permalink($popular_post->ID)?>"><?php echo $popular_post->post_title?></a></p>
                            <?php
                            if ($cl == "ru") {
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
                            <p class="side_article_block_date"><?php echo $post_date?></p>
                        </div>
                    </div><!--/.side_popular_article_block-->
                <?php endforeach;?>
            </div><!--/.side_popular_article_blocks-->
        </div><!--/.side_popular_articles-->
		<?php
			if( have_rows($sideBanners, 'options') ):
				while ( have_rows($sideBanners, 'options') ) : the_row(); ?>
					<div class="sidebar_reklama_block">
						<a href="<?php the_sub_field('link');?>" target="_blank"><img src="<?php the_sub_field('img');?>" alt=""/></a>
					</div>
		<?php	endwhile;
			endif;
        ?>
        <div id="tag-cloud"></div>
        <script>
            tag_cloud = [
                <?php
                if($cat) {
                $current_cat = get_category($cat);
                $parent_cat_id = (int)$current_cat->parent;
                $terms = get_terms(array(
                    'taxonomy' => 'category',
                    'hide_empty' => false,
                    'parent' => (($parent_cat_id) ? $parent_cat_id : $current_cat->cat_ID),
                    'orderby' => 'count',
                    'order' => 'DESC',
                ));
                usort($terms, function ($first, $second) {
                    if ($first->count === $second->count) {
                        return 0;
                    }

                    return ($first->count < $second->count) ? 1 : -1;
                });

                $weight = count($terms) > 10 ? 10 : count($terms);
                
                $i = 0;

                foreach ($terms as $key => $term) {
                if ($term->count === 0) {
                    continue;
                }

                if(get_field('is_tag', $term) !== true) {
                    continue;
                }

                if ($i !== 0) {
                    echo ',';
                }

                ?>{
                    text: "<?=htmlspecialchars($term->name)?>",
                    weight: <?=$weight?>,
                    link: "<?=get_term_link($term->term_id)?>"
                }
                <?php
                $i++;
                $weight = ($weight > 1) ? $weight - 1 : 1;
                }
                }
                ?>
            ];
        </script>
	</div><!--/.side_fixed-->
</div><!--/.dtc.sidebar-->
