<div class="choose_region">
	<?php
		$cl = pll_current_language();
		$current_cat = get_category($cat);
		if($current_cat->parent == 0) {
			$cat_id_for_list_search = $cat;
		} else {
			$cat_id_for_list_search = $current_cat->parent;
		}
	
		$country_list = array(); //сюда складываем метки стран
		$city_list = array(); //сюда складываем метки городов
		$country_args = array (
			'post_type' => 'post',
			'posts_per_page'   => -1,
			'offset' => 0,
			'category' => $cat_id_for_list_search,
			'category__not_in' => array(20), //20 - Календарь мероприятий
			'post_status'      => 'publish',
		);
		$child_posts = get_posts($country_args); //отобрали дочерние посты от текущей рубрики
		foreach($child_posts as $child_post):
		//	if ($cl == 'eng'){
			$country_metka_obj = get_field('country', $child_post->ID);
		//	}else{
		//	$country_metka_obj = get_field('country_eng', $child_post->ID);	
			//}	
			//var_dump($country_metka_obj);
			if(!in_array($country_metka_obj->name, $country_list)) {
				if($country_metka_obj->name != NULL) {
					$country_list[$country_metka_obj->term_id] = $country_metka_obj->name;
				}
			}
			//if($cl == 'ru'){
			$city_metka_obj = get_field('city', $child_post->ID);
			//}else{
			//$city_metka_obj = get_field('city_eng', $child_post->ID);	
			//}
			if(!in_array($city_metka_obj->name, $city_list)) {
				if($city_metka_obj->name != NULL) {
					$city_list[$city_metka_obj->term_id] = $city_metka_obj->name;
				}
			}
		endforeach;
		asort($country_list);
		asort($city_list);
	?>
	<?php if(!empty($country_list)):?>
		<div class="choose_country">
			<?php if($cl == 'ru'){ ?>
			<p>Выберите интересующую вас страну</p>
			<?php }else{ ?>
			<p>Choose the country</p>
			<?php }; ?>
			<div class="custom_select">
				<p class="custom_select_text"><? if($cl == "ru"):?>Выбрать страну<? ;else:?>Choose the country<? ; endif; ?></p>
				<div class="custom_select_list">
					<ul>
						<?php $count=1; foreach($country_list as $country_id => $country_name):?>
						<li data-cat="<?php echo $cat_id_for_list_search?>" data-tag_id="<?php echo $country_id;?>" data-field_name="country"><?php echo $country_name?></li>
						<?php $count++; endforeach?>
					</ul>
				</div>
			</div><!--/.custom_select-->
		</div><!--/.choose_country-->
	<?php endif;?>
	<?php if(!empty($country_list) && !empty($city_list)):?>
	<span class="choose_region_or"><? if($cl == 'ru'): ?>или<? ; else: ?> or <? ; endif;?></span>
	<?php endif;?>
	<?php if(!empty($city_list)):?>
		<div class="choose_city">
			<?php if($cl == 'ru'){ ?>
			<p>Выберите интересующий вас город</p>
			<?php }else{ ?>
			<p>Choose the city</p>
			<?php }; ?>
			<div class="custom_select">
				<p class="custom_select_text"><? if($cl == "ru"):?>Выбрать город<? ;else:?>Choose the city<? ; endif; ?></p>
				<div class="custom_select_list">
					<ul>
						<?php $count=1; foreach($city_list as $city_id => $city_name):?>
						<li data-cat="<?php echo $cat_id_for_list_search?>" data-tag_id="<?php echo $city_id;?>" data-field_name="city"><?php echo $city_name?></li>
						<?php $count++; endforeach?>
					</ul>
				</div>
			</div><!--/.custom_select-->
		</div><!--/.choose_country-->
	<?php endif;?>
</div><!--/.choose_region-->