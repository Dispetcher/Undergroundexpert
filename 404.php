<?php get_header(); ?>
<?php get_template_part('includes/breadcrumbs')?>
<div id="content_section">
    <div class="center_wrap">
        <div class="dt">
            <div class="dtc vat content_column">
                <div class="content_holder_not_found">
					<h1 class="block_title big">Страница не найдена</h1>
                	<div class="page_content">
                    	<h2 align="center">Данная страница не найдена</h2>
                    	<h3 align="center">Перейдите на <a href="/">главную страницу</a> сайта</h3>
					</div><!--/.page_content-->
				</div><!--/.post_content_holder-->	
            </div><!--/.dtc.content_column-->
            <?php get_sidebar();?>
        </div><!--/.dt-->
    </div><!--/.center_wrap-->
</div><!--/#content_section-->
<?php get_footer();?>