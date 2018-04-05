<?php
$cl = pll_current_language();
if ($cl == 'ru') {
    $logo = 'logo';
    $second_logo = 'second_logo';
    $descriptor = 'descriptor';
    $link_to_index = "link_to_index";
    $subscribeButton = "subscribe_button";
    $subscribeButtonLink = "subscribe_button_link";
    $search_field_text = "search_field_text";
    $search_dropdown_text = "search_dropdown_text";
    $title = "seo_title";
    $description = "seo_description";
    $prefix_title = ' - новости строительства и развития подземных сооружений';
    $prefix_description = ' - статьи о строительстве метро, поземных переходов, автомобильных развязок.';
    $urlForSearch = get_bloginfo('siteurl');
} else {
    $logo = 'logo-eng';
    $second_logo = 'second_logo-eng';
    $descriptor = 'descriptor-eng';
    $link_to_index = "link_to_index-eng";
    $subscribeButton = "subscribe_button-eng";
    $subscribeButtonLink = "subscribe_button_link-eng";
    $search_field_text = "search_field_text-eng";
    $search_dropdown_text = "search_dropdown_text-eng";
    $title = "seo_title-eng";
    $description = "seo_description-eng";
    $prefix_title = ' - news construction and development pose structures';
    $prefix_description = ' - articles about the construction of the subway, underground crossings, road junctions.';
    $urlForSearch = get_bloginfo('siteurl') . "/";
}
    $thumbnail_src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );  
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="<?=((substr($_SERVER['REQUEST_URI'], 0, 4) === '/en/') ? 'en-us' : 'ru')?>"> <!--<![endif]-->
    <head>
    <?php foreach(pll_the_languages(array('raw' => 1, 'hide_if_no_translation' => 1)) as $lang): ?>
        <link rel="alternate" hreflang="<?=$lang['slug']?>" href="<?=$lang['url']?>" />
    <?php endforeach; ?>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name = "twitter:card"  content = "summary"  /> 
        <meta name = "twitter:site"  content = "UndergroundExpert"  />
        <meta name = "twitter:title"  content = "<?php if(get_field($title, 'category_'.$cat)): the_field($title, 'category_'.$cat ); else: wp_title(''); echo $prefix_title; endif; ?>" /> 
        <meta name = "twitter:description "  content = "<?php echo the_excerpt();?>" /> 
        <meta name = "twitter:image" content="<?php echo get_the_post_thumbnail_url(); ?>" />
        <meta name = "twitter:image:width" content="295"/>
        <meta name = "twitter:image:height" content="195"/>
        <meta name = "twitter:domain"  content = "http://undergdroundexpert.info"  /> 
        <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon" />
        <?php
        if ( get_option('blog_public') !== '0' ) {
            ?><meta name='robots' content='all' /><?php
        }

            if(is_category()): 
        ?>
        <link href="/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
            <title><?php if(get_field($title, 'category_'.$cat)): the_field($title, 'category_'.$cat ); else: single_cat_title(); echo $prefix_title;  endif;?></title>

            <?php if(get_field($description)):?>
                <meta name="description" content="<?php the_field($description, 'category_'.$cat)?>">
            <?php else:?>
                <meta name="description" content="<? single_cat_title(); echo $prefix_description;?>">
            <?php endif;?>

            <meta name="keywords" content="<?php the_field('seo_keywords', 'category_'.$cat)?>">
            
        <?php else:?>
            
            <?php if(get_field($title)):?>
                <title><?php the_field($title)?></title>
            <?php else:?>
                <!--<title><?php wp_title('');?></title>-->
                <title><?php wp_title(''); ?><?php echo $prefix_title?></title>
            <?php endif;?>
            
            <?php if(get_field($description)):?>
                <meta name="description" content="<?php the_field($description)?>">
            <?php else:?>
                <meta name="description" content="<?php wp_title(''); echo $prefix_description;?>">
            <?php endif;?>
            <?php if(get_field('seo_keywords')):?>
                <meta name="keywords" content="<?php the_field('seo_keywords')?>">
            <?php endif;?>
        <?php endif;?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
                
        <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/normalize.min.css">
        <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/main_new.css">
        <link rel="stylesheet" href="<?php bloginfo('template_url')?>/js/owlcarousel/assets/owl.carousel.min.css">
        <link rel="stylesheet" href="<?php bloginfo('template_url')?>/js/fancybox/jquery.fancybox.css">
                
        <?php if(get_the_ID() == '10077'){?>
        <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/manage_sub.css">
        <?php };?>
        
        <script src="<?php bloginfo('template_url')?>/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
        <?php wp_head();?>
    </head>
    <?php
        $dop_classes = '';
        if(!is_front_page()) $dop_classes = 'inner_page';
    ?>
    <body <?php body_class($dop_classes)?>>
        <!--[if lt IE 8]>
            <p class="browserupgrade">Вы используете <strong>устаревший</strong> браузер. Пожалуйста <a href="http://browsehappy.com/">обновите браузер</a> для полноценной работы сайта.</p>
        <![endif]-->
        <!--LiveInternet counter-->
        <script type="text/javascript">
    new Image().src = "//counter.yadro.ru/hit?r"+
    escape(document.referrer)+((typeof(screen)=="undefined")?"":
    ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
    screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
    ";h"+escape(document.title.substring(0,150))+
    ";"+Math.random();</script>
        <!--/LiveInternet-->

        <span class="mobile_menu_opener"></span>
        <div class="mobile_menu">
            <ul>
                <?php wp_nav_menu(array('menu' => 'Главное меню', 'container' => '','items_wrap' => '%3$s')); ?>
            </ul>
        </div>
        <header id="header">
            <div id="top">
                <div class="center_wrap">
                    <div class="dt">
                        <div class="dtc logo">
                            <div class="dt">
                                <div class="dtc">
                                    <a href="<?php the_field($link_to_index, 'options')?>"><img src="<?php the_field($logo, 'options')?>" alt=""/></a>
                                </div>
                                <div class="dtc descriptor">
                                    <a href="<?php the_field($link_to_index, 'options')?>">
                                        <img src="<?php the_field($second_logo, 'options')?>" alt="" />
                                        <span><?php the_field($descriptor, 'options')?></span>
                                    </a>
                                </div>
                            </div><!--/.dt-->
                        </div><!--/.logo-->
                        <div class="mob_sep"></div>
                        <div class="dtc <?php if(is_front_page()): echo 'search_wrap front_search'; else: echo 'search_wrap'; endif; ?>">
                            <form method="get" name="searchform" id="searchform"  action="<?=$urlForSearch?>">
                                <div class="dt">
                                    <div class="dtc search_field">
                                        <input type="text" name="s" id="s" value="" placeholder="<?php the_field($search_field_text, 'options')?>"/>
                                        <span class="search_date_notice"><?php the_field($search_dropdown_text, 'options')?></span>
                                    </div>
                                    <div class="dtc">
                                        <input id="btnSearch" type="submit" name="submit" value="Поиск" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <?php
                            if(!is_front_page()):
                        ?>
                            <div class="dtc top_subscribe_wrap">
                                <a class="button" href="<?php the_field($subscribeButtonLink, 'options');?>"><?php the_field($subscribeButton, 'options');?></a>
                            </div>
                        <?php endif;?>
                        <div class="lsw-wrap">
                            <ul><?php 
                                pll_the_languages(array(
                                    'show_flags' => 1,
                                    'show_names' => 0,
                                    'dropwdown' => 0)
                                );?>
                            </ul>
                        </div>
                    </div><!--/.dt-->
                </div><!--/.center_wrap-->
            </div><!--/#top-->
        </header><!--/#header-->
        <div id="main_nav">
            <div class="center_wrap">
                <nav class="main_nav">
                    <ul class="main_menu">
                        <?php wp_nav_menu(array('menu' => 'Главное меню', 'container' => '','items_wrap' => '%3$s')); ?>
                    </ul>
                </nav>
            </div><!--/.center_wrap-->
        </div><!--/#main_nav-->