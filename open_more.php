<?
require($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
header('Content-Type: text/html; charset=utf-8');

if(isset($_POST['offset'])) { 
	$offset = trim(strip_tags($_POST['offset']));
}
if(isset($_POST['cat_id'])) { 
	$cat_id = trim($_POST['cat_id']);
}

$cl = pll_current_language();
if ($cl == 'ru') {
	$articlesCategories = "article_categories";
    $articlesCount = "articles_count";
    $articlesColors = "articles_colors";
} else {
	$articlesCategories = "article_categories-eng";
	$articlesCount = "articles_count-eng";
	$articlesColors = "articles_colors-eng";
}
// Определим id главной страницы (к ней привязаны значения полей)
$frontpage_id = get_option( 'page_on_front' );

// Схема id-color,id-color,... 
// Сначала разобъем на двойки, в качестве разделителя запятая
$tmp_colors = explode(',', get_field($articlesColors, $frontpage_id));
// Теперь разобъем двойки через разделитель дефис и соберем ассоциативный массив $colors
foreach ($tmp_colors as $result) {
    $tmp = explode('-', $result);
    $colors[$tmp[0]] = $tmp[1];
}

$args = array (
	'post_type' => 'post',
	'posts_per_page' => -1,
	'category__in' => get_field($articlesCategories, $frontpage_id),
	'post_status' => 'publish',
);

$posts_num = 0;
$posts_arr = get_posts($args);
if(is_array($posts_arr)):
	$posts_num = count($posts_arr); //Количество всех постов
endif;
		
global $posts_query;

if($cat_id == '18'){
	$cat_not_arr = array(1, 20, 188, 202);
}else{
	$cat_not_arr = array(1, 18, 20, 188, 202);
}

$args2 = array (
	'post_type' => 'post',
	'posts_per_page' => get_field($articlesCount, $frontpage_id),
	'offset' => $offset,
	'cat' => $cat_id,
	'category__not_in' => $cat_not_arr,
	'post_status' => 'publish',
/*	'orderby' => 'modified',
	'order' => 'DESC',	*/
);

$posts_query = new WP_Query($args2);
	
if ( $posts_query->have_posts() ) {
	while ($posts_query->have_posts()) : $posts_query->the_post(); ?>
		<div class="main_page_block">
			<div class="main_page_block_img">
				<a href="<?php the_permalink();?>"><?php the_post_thumbnail('catalog-thumb')?></a>
					<?php
						/*
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
						*/
						$parent_cat = get_the_category($post->ID);
						$parent_cat_id = $parent_cat[0]->term_id;
						$parent_cat_name = $parent_cat[0]->name;
					?>
					<?php if($cat_id =='' || $cat_id ==2 || $cat_id ==3 || $cat_id ==4 ){ ?>
					<div class="main_page_block_cat" style="background-color: <?php if(isset($colors[$parent_cat_id])): echo $colors[$parent_cat_id]; else: echo 'green'; endif;?>;">
                    	<a href="<?php echo get_term_link((int) $parent_cat_id, 'category')?>"><?php echo $parent_cat_name; ?></a>
                    </div>
					<?php } ?>
			</div><!--/.main_page_block_img-->
			<div class="main_page_block_info">
				<p class="main_page_block_title"><a href="<?php the_permalink();?>"><?php the_title()?></a></p>
				<p class="main_page_block_text"><?php echo the_excerpt();?></p>
			</div>
		</div><!--/.main_page_block-->
<?php 	
	endwhile; 

	wp_reset_postdata();

	if($offset + 6 > $posts_num) {
		echo '<span class="finish"></span>';
	}
} else {
	echo '0';
}
?>