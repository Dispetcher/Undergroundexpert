<?php
// Определим текущий язык
$cl = pll_current_language();
// Названия полей для русского и английского языков (fieldname + '-eng')
if ($cl == 'ru') {
	$subscribe_title = 'subscribe_title';
    $subscribe_button = 'subscribe_button';
    $subscribe_button_link = 'subscribe_button_link';
} else {
	$subscribe_title = 'subscribe_title-eng';
    $subscribe_button = 'subscribe_button-eng';
    $subscribe_button_link = 'subscribe_button_link-eng';
}
// Определим id главной страницы (к ней привязаны значения полей)
$frontpage_id = get_option( 'page_on_front' );

?>

<div class="subscribe_block 111">
	<p class="block_title"><?php the_field($subscribe_title, $frontpage_id);?></p>
	<a class="button" href="<?php the_field($subscribe_button_link, $frontpage_id);?>"><?php the_field($subscribe_button, $frontpage_id);?></a>
</div><!--/.subscribe_block-->