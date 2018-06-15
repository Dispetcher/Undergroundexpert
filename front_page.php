<?php get_header();
// Определим текущий язык
$cl = pll_current_language();
// Названия полей для русского и английского языков (fieldname + '-eng')
if ($cl == 'ru') {
    // Здесь текстовые константы для русской версии
    $slides = "slides";
    $slidesButtonText = "slides_button_text";
    $lastEventsTitle = "last_events_title";
	$lastEventsUrl = "last_events_url";
    $lastEvents = "popular_events";
    $lastEventsSubscribe = "last_events_subscribe_button_text";
    $lastEventsSubscribeLink = "last_events_subscribe_button_link";
    $articlesCategories = "article_categories";
    $articlesCount = "articles_count";
    $articlesColors = "articles_colors";
    $moreArticles = "more_articles_button";
    $foldArticles = "fold_articles_button";
    $calendarTitle = "calendar_title";
    $calendarLink = "calendar_link";
    $events = "events";
    $quoteTitle = "quote_title";
    $quoteLink = "quote_link";
    $dayQuote = "day_quote";
    $interactiveMapTitle = "interactive_map_title";
    $interactiveMapLink = "interactive_map_link";
    $interactiveMapText = "interactive_map_text";
    $interactiveMapButton = "interactive_map_button";
    $h1 = "seo_h1";
} else {
    // Здесь текстовые константы для английской версии
    $slides = "slides-eng";
    $slidesButtonText = "slides_button_text-eng";
    $lastEventsTitle = "last_events_title-eng";
	$lastEventsUrl = "last_events_url_eng";
    $lastEvents = "popular_events-eng";
    $lastEventsSubscribe = "last_events_subscribe_button_text-eng";
    $lastEventsSubscribeLink = "last_events_subscribe_button_link-eng";
	$articlesCategories = "article_categories-eng";
	$articlesCount = "articles_count-eng";
	$articlesColors = "articles_colors-eng";
    $moreArticles = "more_articles_button-eng";
    $foldArticles = "fold_articles_button-eng";
    $calendarTitle = "calendar_title-eng";
    $calendarLink = "calendar_link-eng";
    $events = "events-eng";
    $quoteTitle = "quote_title-eng";
    $quoteLink = "quote_link-eng";
    $dayQuote = "day_quote-eng";
    $interactiveMapTitle = "interactive_map_title-eng";
    $interactiveMapLink = "interactive_map_link-eng";
    $interactiveMapText = "interactive_map_text-eng";
    $interactiveMapButton = "interactive_map_button-eng";
    $h1 = "seo_h1-eng";
}
// Схема id-color,id-color,... 
// Сначала разобъем на двойки, в качестве разделителя запятая
$tmp_colors = explode(',', get_field($articlesColors));
// Теперь разобъем двойки через разделитель дефис и соберем ассоциативный массив $colors
foreach ($tmp_colors as $result) {
    $tmp = explode('-', $result);
    $colors[$tmp[0]] = $tmp[1];
}
?>
<div id="main_slider">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat">
                <div class="main_slider_block">
                    <div class="main_slider owl-carousel">
                        <?php
                            if( have_rows($slides) ):
                                while ( have_rows($slides) ) : the_row(); ?>
                                    <div class="item">
                                        <div class="main_slide">
                                            <img src="<?php the_sub_field('img')?>" alt=""/>
                                            <div class="main_slide_over">
                                                <p><a href="<?php the_sub_field('link')?>"><?php the_sub_field('text')?></a></p>
                                                <a class="button" href="<?php the_sub_field('link')?>"><?php the_field($slidesButtonText)?></a>
                                            </div>
                                        </div><!--/.main_slide-->
                                    </div><!--/.item--> 
                        <?php   endwhile;
                            endif;
                        ?>
                    </div><!--/.main_slider-->
                </div><!--/.main_slider_block-->
            </div><!--/.dtc-->
            <div class="dtc vat">
                <div class="main_events_block">
					<p class="block_title"><a class="lasteventslink" href="<?php the_field($lastEventsUrl)?>" ><?php the_field($lastEventsTitle)?></a></p>
                    <div class="main_event_blocks">
                        <?php 

                        $posts = get_field($lastEvents);

                        if( $posts ): ?>
                            
                            <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
                                <?php setup_postdata($post); ?>
                                <div class="dt main_event_block">
                                    <div class="dtc vat main_event_icon">
                                        <a href="<?php the_permalink();?>">
                                        <?php the_post_thumbnail('last-event-thumb')?>
                                        </a>
                                    </div>
                                    <div class="dtc vat main_event_info">
                                        <p><a href="<?php the_permalink();?>"><?php the_title();?></a></p>
                                        <?php
                                            if ($cl == "ru") {
                                              $date_str = get_the_time('j.n.Y',$post->ID);
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
                                        <p class="main_event_date"><?php echo $post_date?></p>
                                    </div>
                                </div><!--/.main_event_block-->
                            <?php endforeach; ?>
                            <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
                        <?php endif; ?>
                    </div><!--/.main_event_blocks-->
                    <a class="button" href="<?php the_field($lastEventsSubscribeLink)?>"><?php the_field($lastEventsSubscribe)?></a>
                </div><!--/.main_events_block-->
            </div><!--/.dtc-->
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#main_slider-->
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <div class="main_page_blog">
                    <h1 class="block_title big"><?php if(get_field($h1)): the_field($h1); else: wp_title(''); endif;?></h1>
                    <div class="main_page_blocks">
                        <?php 
						
/* Массив арг для вывода статей------                   */
						$args = array (
                                'post_type' => 'post',
                                'posts_per_page' => get_field($articlesCount),
                                'offset' => 0,
								'cat' => '',
                                'category__in' => get_field($articlesCategories),
								'category__not_in' => '202',
                                'post_status' => 'publish',
								/*'orderby' => 'title',*/
								/*'order' => 'DESC',*/
                            );
                            global $posts_query;
                            $posts_query = new WP_Query($args);
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
												*/
												$parent_cat = get_the_category($post->ID);
												$parent_cat_id = $parent_cat[0]->term_id;
												$parent_cat_name = $parent_cat[0]->name;
                                            ?>
                                            
                                                <div class="main_page_block_cat" style="background-color: <?php  if(isset($colors[$parent_cat_id])): echo $colors[$parent_cat_id]; else: echo 'green'; endif;?>;">
                                                    <a href="<?php echo get_term_link((int) $parent_cat_id, 'category')?>"><?php echo $parent_cat_name;*/ ?></a>
                                                </div> 
                                        
                                    </div><!--/.main_page_block_img-->
                                    <div class="main_page_block_info">
                                        <p class="main_page_block_title"><a href="<?php the_permalink();?>"><?php the_title()?></a></p>
                                        <p class="main_page_block_text"><?php echo the_excerpt();?></p>
                                    </div>
                                </div><!--/.main_page_block-->
                        <?php endwhile; wp_reset_postdata(); ?>
                        
                    </div><!--/.main_page_blocks-->
                    <div class="button_to_center">
                        <a class="button blue_button open_more" href="#"><?php the_field($moreArticles)?></a>
                        <a class="button blue_button hide_articles hidden" href="#" ><?php the_field($foldArticles)?></a>
                    </div>
                </div><!--/.main_page_blog-->
                <div class="main_page_events_block">
                    <div class="dt">
                        <div class="dtc vat main_page_events">
                            <p class="block_title"><a href="<?php the_field($calendarLink);?>"><?php the_field($calendarTitle);?></a></p>
                            <div class="main_page_event_blocks">
                                <?php
								  $args3 = array (
                                'post_type' => 'post',
                                'posts_per_page' => 3,
                                'offset' => 0,
                                'category__in' => array(20),
                                'post_status' => 'publish',
								'meta_key' => 'start_date',
								'meta_value' => date( "Ymd" ), 
								'meta_compare' => '>',  
								'orderby' => 'meta_value',
								'order' => 'ASC',
                           		 );
																								
                               global $posts_query;
                            $posts_query = new WP_Query($args3);
                            while ($posts_query->have_posts()) : $posts_query->the_post(); ?>
                                    <div class="dt main_page_event_block">
                                        <div class="dtc vat main_page_event_block_img">
											<a href="<?php the_permalink();?>"><?php the_post_thumbnail('catalog-thumb')?></a>
                                        </div>
                                        <div class="dtc vat main_page_event_block_info">
                                            <p class="main_page_event_date"><?php the_field('dates',$post->ID, true);?></p>
                                            <p><a href="<?php the_permalink();?>"><?php the_title();?></a></p>
                                        </div><!--/.main_page_event_block_info-->
                                    </div><!--/.main_page_event_block-->    
                                <?php   endwhile; wp_reset_postdata();
                                   /* endif;*/
                                ?>
                            </div><!--/.main_page_event_blocks-->
                        </div><!--/.dtc.main_page_events-->
                        <div class="dtc vat main_quote">
                            <div class="day_quote">
                                <p class="block_title"><?php the_field($quoteTitle);?></p>
                                <div class="day_quote_text">
                                    <p><a href="<?php the_field($quoteLink);?>"><?php the_field($dayQuote);?></a></p>
                                </div>
                            </div>
                        </div><!--/.dtc.main_quote-->
                    </div><!--/.dt-->
                </div><!--/.main_page_events_block-->
                <div class="main_page_interactive_map">
                    <p class="block_title"><a href="<?php the_field($interactiveMapLink);?>"><?php the_field($interactiveMapTitle)?></a></p>
                    <p><?php the_field($interactiveMapText)?></p>
                    <a class="button" href="<?php the_field($interactiveMapLink);?>"><?php the_field($interactiveMapButton);?></a>
                </div><!--/.main_page_interactive_map-->
                <?php get_template_part('includes/main_page_publication_block')?>
                <div class="page_content">
                    <?php echo the_content(); ?>
                </div><!--/.page_content-->
                <?php get_template_part('includes/subscribe')?>
            </div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>