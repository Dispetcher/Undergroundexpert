<?php get_header();
/*
Template Name: Успешная подписка на рассылку
*/
$cl = pll_current_language();
?>
<div class="subscribe_content">
	<div class="subscribe_content__block">
		<div class="subscribe_sc_content__block__form">
			<h3 class="subscribe_sc_content_font sub_sc_head">
				Спасибо, что подписались на рассылку
			</h3>
			<h4 class="subscribe_sc_content_font sub_sc_second">
				информационного портала «Подземный эксперт»
			</h4>
			<h3 class="subscribe_sc_content_font sub_sc_head">
				undergroundexpert.info
			</h3>
			<h6 class="subscribe_sc_content_font sub_sc_footer">
				Через несколько секунд Вы будете перенаправлены на главную страницу портала
			</h6>
		</div><!--/.subscribe_sc_content__block__form-->
	</div><!--/.subscribe_content__block-->		
</div><!--/.subscribe_content-->	
<script type="text/javascript">
function ToMain(){
	location="http://undergroundexpert.info";
};	
function animfrst(){
	document.querySelector(".sub_sc_footer").innerHTML = "Через несколько секунд Вы будете перенаправлены на главную страницу портала.";
}	
function animscnd(){
	document.querySelector(".sub_sc_footer").innerHTML = "Через несколько секунд Вы будете перенаправлены на главную страницу портала..";
}	
function animthrd(){
	document.querySelector(".sub_sc_footer").innerHTML = "Через несколько секунд Вы будете перенаправлены на главную страницу портала...";
}	
setTimeout('ToMain()', 3500);
setTimeout('animfrst()', 1000);
setTimeout('animscnd()', 2000);	
setTimeout('animthrd()', 3000);	
</script>
<?php get_footer();?>