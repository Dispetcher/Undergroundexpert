<?php 
get_header();?>
<?php get_template_part('includes/breadcrumbs')?>
<?php $current_cat = get_category($cat);
$cl = pll_current_language();
if( $cl == ru ){
$start_date = 'start_date';
}else{
$start_date = 'start_date_eng';
}?>
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <div class="main_page_blog">
                    <h1 class="block_title big"><?php if(get_field('seo_h1', 'category_'.$cat)): the_field('seo_h1', 'category_'.$cat); else: single_cat_title(); endif;?></h1>
                    <div class="cat_search_wrap clearfix">
                        <?php get_template_part('includes/search_in_cat')?>
                    </div><!--/.cat_search_wrap-->
                    <?php if(get_field('show_choose_region', 'category_'.$cat)):?>   
						<?php get_template_part('includes/choose_region')?>
					<?php endif;?>
					<?php get_template_part('includes/cat_main_article')?>
					<?php 
		  				$args = array (
                                'post_type' => 'post',
                                'posts_per_page' => '10',
                                'offset' => 0,
                                'category__in' => array(188),
                                'post_status' => 'publish',
								'meta_key' => $start_date,
								'meta_value' => date( "Ymd" ), 
								'meta_compare' => '>', 
								'orderby' => 'meta_value',
								'order' => 'ASC',
                           		 );
																								
                            global $posts_query;
                            $posts_query = new WP_Query($args);
                            while ($posts_query->have_posts()) : $posts_query->the_post(); 
						
					?>
						<div class="dt main_page_event_block">
							<div class="dtc vat main_page_event_block_img">
								<a href="<?php the_permalink();?>"><?php the_post_thumbnail('mini-thumb')?></a>
							</div>
							<div class="dtc vat main_page_event_block_info">
								<p class="main_page_event_date"><?php if($cl == ru): the_field('dates'); else: the_field('dates_eng');endif;?></p>
								<p><a href="<?php the_permalink();?>"><?php the_title()?></a></p>
								<a href="<?php the_permalink();?>"><?php if( $cl == ru ):?>Подробнее<?php ;else:?>More<?php ;endif;?></a>
							</div><!--/.main_page_event_block_info-->
						</div><!--/.main_page_event_block-->
					<?php 
						endwhile;
						wp_reset_postdata();
					?>
			
                </div><!--/.main_page_blog-->
                <?php get_template_part('includes/publication_block')?>
                <?php get_template_part('includes/cat_content')?>
            </div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>