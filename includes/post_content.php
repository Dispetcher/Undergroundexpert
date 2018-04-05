<?
$cl = pll_current_language();
if ($cl == 'ru') {
	$sendEmail = 'Отправить на email';
	$author = 'Автор статьи:';
	$addArticles = 'Дополнительные статьи';
	$chooseArticle = 'Выберите интересующую статью:';
	$printVersion = 'Открыть версию для печати';
} else {
	$sendEmail = 'Send to email';
	$author = 'Author of the article:';
	$addArticles = 'Additional articles';
	$chooseArticle = 'Select an article of interest:';
	$printVersion = 'Open printable version';
}
?>
<h1 class="block_title big"><?php if(get_field('seo_h1')): the_field('seo_h1'); else: the_title(); endif;?></h1>
<div class="print_version">
	<?php if(function_exists('wp_print')) { print_link($printVersion); } ?>
	<a href="#send_to_email" class="send_to_email"><?=$sendEmail?></a>
	<div class="dtc vat article_date"><p><?php the_time('F, Y')?></p></div>
</div>
<div class="article_meta">
	<?php if(get_field('author_name')):?>
		<div class="dt article_author">
			<div class="dtc vat">
				<p><?=$author?></p>
			</div>
			<div class="dtc vat">
				<p class="article_author_name"><?php if(pll_current_language() == "ru"): the_field('author_name'); else: the_field('author_name_en'); endif;?></p>	
				<p class="article_author_dol"><?php if(pll_current_language() == "ru"): the_field('author_dol'); else: the_field('author_dol_en'); endif;?></p>
			</div>
		</div><!--/.article_author-->
	<?php endif;?>
	<div class="dt article_meta_date">
		<div class="dtc vat">
			<?php if(get_field('author_contacts_info')):?>
				<p class="author_contacts_anchor"><span><?php the_field('author_contacts_title')?></span></p>
				<div class="auhtor_contacts_info page_content">
					<?php the_field('author_contacts_info')?>
				</div>
			<?php endif;?>
		</div>
	</div>
</div><!--/.article_meta-->
<div class="page_content">
	<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
			<p><span class="article_header"><?php if($cl == 'ru'): the_field('article_header');else: the_field('article_header_en'); endif;?></span></p>
			<?php the_content(''); ?>
		<?php endwhile; ?>
	<?php else : ?>
		<h2 align="center">Не найдено</h2>
	<?php endif; ?>
</div><!--/.page_content-->
<?php if(get_the_tag_list()) {?>
	<div class="article_tags">
		<ul>
			<?php
				echo get_the_tag_list('<ul><li>','</li><li>','</li></ul>');
			?>
		</ul>
	</div><!--/.article_tags-->
<?php }?>
<div class="dop_articles">
	<?php
		$parent_cats = get_the_category($post->ID); //Получили список родительских категорий поста
		$first_level_parent_cat_id = -1; //Ищем ID родительской категории первого уровня
		$first_level_parent_cat_name = '';
		foreach($parent_cats as $parent_cat):
			if($parent_cat->parent == 0) {
				$first_level_parent_cat_id = $parent_cat->term_id;
				$first_level_parent_cat_name = $parent_cat->name;
			}
		endforeach;
	?>
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
<?php get_template_part('includes/share_post')?>
<?php get_template_part('includes/comments_block')?>