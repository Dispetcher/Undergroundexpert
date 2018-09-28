<?php 
$current_cat = get_category($cat); //объект текущей категории
$c_cat = get_category($cat);
$cl = pll_current_language();
if ($cl == "ru") {
	$search_field_text = "search_field_text";
    $search_dropdown_text = "search_dropdown_text";
} else {
	$search_field_text = "search_field_text-eng";
    $search_dropdown_text = "search_dropdown_text-eng";
}
//var_dump($current_cat);
if($current_cat->parent != 0) {
	$current_cat = get_category($current_cat->parent);
}
?>
<div class="cat_search search_wrap <?php if($cat == 20 || $cat == 188): echo 'event_search'; endif; ?>">
	<form method="get" name="searchform" id="searchform"  action="<?php bloginfo('siteurl')?>">
		<div class="dt">
			<div class="dtc search_field">
				<input type="text" name="s" id="s" value="" placeholder="<?php the_field($search_field_text, 'options');?>"/>
				<input type="hidden" value="<?php echo $current_cat->term_id?>" name="cat"/>
				<span class="search_date_notice"><?php the_field($search_dropdown_text, 'options');?></span>
			</div>
			<div class="dtc">
				<input id="btnSearch" type="submit" name="submit" value="Поиск" />
			</div>
		</div>
	</form>
</div><!--/.cat_search-->