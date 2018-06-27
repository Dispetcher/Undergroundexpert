(function ($) {
    $(document).ready(function () {
		$( ".mailpoet_submit" ).click(function() {
			yaCounter22183162.reachGoal('SUBSCRIBE');
			return true;
		});

		//Mobile menu
		$(document).on('click', '.mobile_menu_opener', function() {
			$('.mobile_menu').stop(true, false).fadeToggle(300, function(){
			});
		});
        //Main slider
		var main_slider = $('.main_slider');
		main_slider.owlCarousel({
			loop:true,
			autoplay: true,
			margin: 0,
			dots: true,
			nav: false,
			mouseDrag: false,
			items: 1
		});
        //Tabs
		$(document).on('click', '.tab_selector li', function() {
			if(!$(this).hasClass('active')) {
				var ind = $(this).index();
				$('.tab_selector li.active').removeClass('active');
				$(this).addClass('active');
				$('.tab.visible').fadeOut(300, function(){
					$(this).removeClass('visible');
					$('.tab').eq(ind).fadeIn(300, function(){
						$(this).addClass('visible');
					});
				});
			}
		});
		//fixed sidebar
		/*
			var start_top = parseInt( $('.side_fixed').offset().top );
			var finish_top = parseInt( $('.sidebar').offset().top + $('.sidebar').outerHeight() );
			var bar_height = $('.side_fixed').outerHeight();
			function recount_positions() {
				finish_top = parseInt( $('.sidebar').offset().top + $('.sidebar').outerHeight() );
				$(document).scrollTop($(document).scrollTop() + 1);
			}
			if($(window).width() > 1023) {
				if($('.side_fixed').size()) {
						$('.sidebar').height($('.sidebar').height());
						$(document).scroll(function(){
							if($(document).scrollTop() > start_top  ) {
								$('.side_fixed').addClass('fixed').css({'top': $(document).scrollTop() - start_top});
							} else {
								$('.side_fixed').removeClass('fixed');
							}

							if($(document).scrollTop() > finish_top - bar_height ) {
								$('.side_fixed').css({'top': 'auto', 'bottom' : '0px'});
							} else {
								$('.side_fixed').css({'top': $(document).scrollTop() - start_top, 'bottom' : 'auto'});
							}
						});	

				}
			} 
		*/
		
		// console.log fix
		if (typeof console === 'undefined') {
			window.console = {
				log: function () {}
			};
		}
		
		//Open more articles
		$(document).on('click', 'a.open_more', function(e) {
			e.preventDefault();
			var this_button = $(this);
			var parent_container = $(this).parents('.button_to_center').prev('.main_page_blocks');
			var offset = $(parent_container).find('.main_page_block').size();
			var cat_id = $(this).attr('data-cat');
			$.post('/wp-content/themes/shablon/open_more.php', {offset:offset, cat_id:cat_id}, function(data) {
				if (data !== '0') {
					$(data).appendTo(parent_container);
					$('.hide_articles').removeClass('hidden');
					if (data.indexOf('finish') !== -1) {
						$(this_button).fadeOut(300);
					}
					//recount_positions(); ??
				} else {
					$(this_button).fadeOut(300);
				}
			});
		});
		//Hide articles
		$(document).on('click', 'a.hide_articles', function(e) {
			e.preventDefault();
			var visible_articles_count = $('.main_page_block').size();
			if(visible_articles_count > 6) {
				for(var i = visible_articles_count; i >= 6; i--) {
					$('.main_page_block').eq(i).remove();
				}
			}
			$(this).addClass('hidden');
			var top = $('.main_page_blocks').offset().top;
			$('body,html').stop(false, false).animate({
				scrollTop: top - 100
			}, 800);
			$('.open_more').fadeIn(300);
		});
		//Choose region
		$(document).on('click', '.choose_region .custom_select_list li', function() {
			if(!$(this).hasClass('active')) {
				var parent_block = $(this).parents('.custom_select');

				$('li.active', parent_block).removeClass('active');
				$(this).addClass('active');

				var li_text = $(this).text();
				$('.custom_select_text', parent_block).text(li_text);

				var cat_id = $(this).data('cat');
				var tag_id = $(this).data('tag_id');
				var field_name = $(this).data('field_name');
				if(field_name === 'country') {
					$('.choose_city .custom_select_text').text('Выбрать город');
				} else {
					$('.choose_country .custom_select_text').text('Выбрать страну');
				}
				$.post('/wp-content/themes/shablon/get_posts_by_tag.php', {cat_id:cat_id, tag_id:tag_id, field_name:field_name}, function(data){
					if (data !== '0') {
						$('.main_page_blocks').html(data);
						// recount_positions(); ??
						$('.main_article').fadeOut(300);
						$('.button_to_center').fadeOut(300);
					} 
				});
			}

		});
		
		//MaskedInput
		$.mask.definitions['~'] = '[+-]';
		$('input[type=\'tel\']').mask('+7 (999) 999-99-99');
		$('input').blur(function() {
		}).dblclick(function() {
			$(this).unmask();
		});
		//Fancybox
		$.fn.getTitle = function() {
			var arr = $('a.fancybox');
			$.each(arr, function() {
				var title = $(this).children('img').attr('title');
				$(this).attr('title', title);
			});
		};
		var thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';
		$(thumbnails).addClass('fancybox').attr('rel', 'group').getTitle();
		$('a[rel=group]').fancybox({
			'imageScale': false,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'titlePosition' 	: 'over',
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
			}
		});
			
			$('a[href=\'#publication_order\'], a[href=\'#reklama_order\'], a[href=\'#send_to_email\']').fancybox({
                padding: [0,0,0,0],
				fitToView	: false,
				autoCenter : true,
				scrolling : 'no',
				maxWidth	: 400,
                width		: '100%',
                autoSize	: false,
                autoHeight	: true,
				wrapCSS: 'custom_fancy_wrap'	
            });
			$('a[href=\'#thanks\']').fancybox({
                padding: [0,0,0,0],
				fitToView	: false,
                maxWidth	: 485,
                maxHeight	: 999,
                width		: '100%',
                autoSize	: false,
                autoHeight	: true,
				wrapCSS: 'custom_fancy_wrap'
            });
			$('a[href=\'#social_authorization_popup\']').fancybox({
                padding: [0,0,0,0],
				fitToView	: false,
				autoCenter : true,
				scrolling : 'no',
				maxWidth	: 400,
                width		: '100%',
                autoSize	: false,
                autoHeight	: true,
				wrapCSS: 'custom_fancy_wrap'	
            });
			$('a[href=\'#conf\']').fancybox({
                padding: [0,0,0,0],
				fitToView	: false,
				autoCenter : true,
				scrolling : 'no',
				maxWidth	: 1000,
                width		: '100%',
                autoSize	: false,
                autoHeight	: true,
				wrapCSS: 'custom_fancy_wrap'	
            });
		//Thanks
			if($('#publication_order .wpcf7').size()) {
				var form_1 = document.querySelector('#publication_order .wpcf7');
				form_1.addEventListener( 'wpcf7mailsent', function() {
					$('.thank_link').click();
				}, false );
			}
			if($('#reklama_order .wpcf7').size()) {
				var form_2 = document.querySelector('#reklama_order .wpcf7');
				form_2.addEventListener( 'wpcf7mailsent', function() {
					$('.thank_link').click();
				}, false );
			}
		//Open post author contacts
			$(document).on('click', '.author_contacts_anchor', function(){
				$(this).next('.auhtor_contacts_info').stop(true,false).slideToggle(300);
			});
		//Social authorization
			$('.article_comments_wrap.not_registered textarea').focus(function(){
				if($(this).parents('form').find('.agree').hasClass('checked')) {
					$('a[href="#social_authorization_popup"]').click();
				} else {
					alert('Необходимо согласиться с условиями политики конфиденциальности');
				}
				
			});
		//Subscribe rules
			$(document).on('click', '.open_subscribe_text', function(){
				$(this).toggleClass('opened');
				$('.subscribe_agree_content').stop(true,false).slideToggle(300);
			});
			
			$('.subscribe_agree_form form input[type="button"]').attr('disabled','disabled');
			$(document).on('change', '#subscribe_agree_check', function (){
				if($('#subscribe_agree_check').prop('checked')) {
					$('.subscribe_agree_form form input[type="button"]').removeAttr('disabled');
				} else {
					$('.subscribe_agree_form form input[type="button"]').attr('disabled','disabled');
				}
			});
	/*	$('.mailpoet_submit').attr('disabled','disabled');
			$(document).on('change', '#subscribe_agree_check', function (){
				if($('#subscribe_agree_check').prop('checked')) {
					$('.mailpoet_submit').removeAttr('disabled');
				} else {
					$('.mailpoet_submit').attr('disabled','disabled');
				}
			});*/
		
		
		//To top
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.to_top').fadeIn();
				} else {
					$('.to_top').fadeOut();
				}
			});
			$('.to_top').click(function () {
				$('body,html').stop(false, false).animate({
					scrollTop: 0
				}, 800);
				return false;
			});	
		//Search date notice
			$('input#s').focus(function(){
				var parent_form = $(this).parents('form');
				$('.search_date_notice', parent_form).fadeIn(200);
			});
			$('input#s').blur(function(){
				var parent_form = $(this).parents('form');
				$('.search_date_notice', parent_form).fadeOut(200);
			});
		//Move agree block to form
			$('.conf_agree.movable').appendTo('.form-submit');
		//Personal agree
			$(document).on('click', '.agree', function() {
                $(this).toggleClass('checked');
            });
		
		//Form validation
            function validate_form(obj) {
                var form = obj;
                var no_valid_fields = 0;
                $('input, textarea', form).each(function(index, elem){
                    if( ($(this).hasClass('required')) && $(this).val() === '') {
                        $(this).addClass('no_valid');
                        no_valid_fields += 1;
                    }
                });
                if($('input[type="email"]', form).size() > 0) {
                    var email_input = $(form).find('input[type="email"]').val();
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(!reg.test(email_input)) {
                        no_valid_fields += 1;
                        $(form).find('input[type=\'email\']').addClass('no_valid');
                    }
                }
                if(no_valid_fields) {
                    return false;
                } else {
                    return true;
                }
            }
            $(document).on('focus', '.no_valid', function(){
                $(this).removeClass('no_valid');
            });
        //Send post to email
			$('#send_to_email form').submit(function(e){
				e.preventDefault();
				if(!$('#send_to_email .conf_agree .checked').size()) {
					return false;
				} else {
					var form = $(this);
					if(validate_form(form)) {
						var client_name = '';
						var client_email = '';
						var post_id = '';
						
						if($('input[name="client_name"]', form).size()) {
							client_name = $('input[name="client_name"]', form).val();
						}
						if($('input[name="client_email"]', form).size()) {
							client_email = $('input[name="client_email"]', form).val();
						}
						if($('input[name="post_id"]', form).size()) {
							post_id = $('input[name="post_id"]', form).val();
						}
						$.post('/wp-content/themes/shablon/send_to_email.php', {client_name:client_name, client_email:client_email, post_id:post_id}, function(data){
							if(data === 'ok') {
								$('a[href="#thanks"]').trigger('click');
								$('input[name="client_name"]', form).val('');
								$('input[name="client_email"]', form).val('');
							} else {
								alert('Сообщение не отправлено. Обратитесь к администратору сайта');
							}
						});
					}
				}
			});
		//Personal agree
            $(document).on('click', '.conf_agree .agree', function() {
                if(!$(this).hasClass('checked')) {
                    alert("Без согласия на обработку данных, мы не можем принять заявку");
                }
            });
		//Feedback unsubscription
		//Изначальное значение - неактивное
		var elmchk = $('#chkbx4 input');
		$('#fbbtn').attr('disabled', 'disabled');
		//Textarea
		$('textarea#textarea_other').attr('disabled','disabled');	
		$(document).on('click', function(){
			if((elmchk).is(':checked')){
				$('textarea#textarea_other').removeAttr('disabled');	
			}else{
				$('textarea#textarea_other').attr('disabled','disabled');
			}
		});
		//Feedback button
		$(document).on('click', function(){
			if($('#chkbx1 input').is(':checked')){
					$('#fbbtn').removeAttr('disabled');
				}else if($('#chkbx2 input').is(':checked')){
					$('#fbbtn').removeAttr('disabled');
				}else if($('#chkbx3 input').is(':checked')){
					$('#fbbtn').removeAttr('disabled');
				}else if($('#chkbx4 input').is(':checked')){
					$('#fbbtn').removeAttr('disabled');
				}else if($('.mailpoet_select').val() === 'unsubscribed'){
					$('#fbbtn').removeAttr('disabled');
				}else{
				$('#fbbtn').attr('disabled', 'disabled');	
				};
		});
		//Redirect to reg-successful page
		//Получаем св-во об успешной регистрации
		$(".mailpoet_submit").on('click', function(){
			setTimeout(function(){
				var reg_display = $(".mailpoet_validate_success").css("display");
				if(reg_display === "block"){
					$(location).attr('href', "http://undergroundexpert.info/podpisatsya-na-rassylku/registration-successfully/");
				}
			}, 2500);
		});
		
		//Hide text in metrostroi_cat
		let more_word = $('<div class="page_content_text_more"><span>Подробнее</span></div>');
		let collapse_word = $('<div class="page_content_text_less"><span>Свернуть</span></div>');
		let par = $(".page_content_text > p");
		if(par.length > 1 ){
			$.each(par, function(){
				par.hide();
				par.eq(0).show();
				par.eq(0).append(more_word);
				par.eq(par.length-1)
					.append(collapse_word)
					.css('float', 'left');				
				$(".page_content_text_less").hide();
			});
		}	
		$(document).on("click", ".page_content_text_more", function(){
			par.show();
			$(".page_content_text_more").hide();			
			$(".page_content_text_less").show();
		});
		$(document).on("click", ".page_content_text_less", function(){
			$.each(par, function(){
				par.hide();
				par.eq(0).show();
				$(".page_content_text_more").show();
				$(".page_content_text_less").hide();
			})
		});
		//Personal data popup window
		var window_width = $(window).width();
		var window_height = $(window).height();
		var cook = $.cookie('uexpertperson');
		//var cook_pos = window_height - 67;
		$(window).scrollTop();
		if (cook !== '1'){
			if (window_width > 767){
				setTimeout(function(){
				$('#person_data').css('display','block').animate(
					{opacity: 1}, 1200, 'swing');
				}, 1500);
			};
			$('.close_person_data').on('click', function(e){
				e.preventDefault();
				$('#person_data').fadeOut(300);
				$.cookie('uexpertperson', '1', {expires : 30});
			});
			/*$(document).scroll( function(){
				$('#person_data').animate( {top: $(this).scrollTop() + cook_pos + 'px'}, 100);
			});*/
		};
		
		// Subscription form
		var submit_btn = $('input[type="submit"].mailpoet_submit');
			submit_btn.attr('disabled', 'disabled');
		
/****** End of document.ready *******/		
	});
	
    tag_cloud = ((typeof tag_cloud) === "undefined") ? [] : tag_cloud;

    $('#tag-cloud').jQCloud(tag_cloud, {
        height: 295,
		fontSize: {
			from: 0.06,
			to: 0.04
		},
        shape: 'elliptic',
        removeOverflowing: false,
        delay: 0
    });
})(jQuery);