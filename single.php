<?php get_header();
$post_views = get_field('views_num');
update_field('views_num', ++$post_views, $post->ID);
?>
<?php get_template_part('includes/breadcrumbs')?>
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <div class="post_content_holder">
					<?php if(in_category(20)):?>
						<?php get_template_part('includes/event_post_content')?>
					<?php else:?>
						<?php get_template_part('includes/post_content')?>
					<?php endif;?>
				</div>
			</div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>