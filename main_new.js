/* @Dispetcher, last edited 19.02*/

html {
    color: #222;
    font-size: 1em;
    line-height: 1.4;
}

::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
}

::selection {
    background: #b3d4fc;
    text-shadow: none;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}

audio,
canvas,
iframe,
img,
svg,
video {
    vertical-align: middle;
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}

textarea {
    resize: vertical;
}

.browserupgrade {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}


/* ==========================================================================
   Author's custom styles
   ========================================================================== */
@font-face {
    font-family: 'PT_Sans';
    src: url('fonts/PT_Sans.eot');
    src: url('fonts/PT_Sans.eot') format('embedded-opentype'),
    url('fonts/PT_Sans.woff2') format('woff2'),
    url('fonts/PT_Sans.woff') format('woff'),
    url('fonts/PT_Sans.ttf') format('truetype'),
    url('fonts/PT_Sans.svg#PT_Sans') format('svg');
}
@font-face {
    font-family: 'PT_Sans_Italic';
    src: url('fonts/PT_Sans_Italic.eot');
    src: url('fonts/PT_Sans_Italic.eot') format('embedded-opentype'),
    url('fonts/PT_Sans_Italic.woff2') format('woff2'),
    url('fonts/PT_Sans_Italic.woff') format('woff'),
    url('fonts/PT_Sans_Italic.ttf') format('truetype'),
    url('fonts/PT_Sans_Italic.svg#PT_Sans_Italic') format('svg');
}
@font-face {
    font-family: 'PT_Sans_Bold';
    src: url('fonts/PT_Sans_Bold.eot');
    src: url('fonts/PT_Sans_Bold.eot') format('embedded-opentype'),
    url('fonts/PT_Sans_Bold.woff2') format('woff2'),
    url('fonts/PT_Sans_Bold.woff') format('woff'),
    url('fonts/PT_Sans_Bold.ttf') format('truetype'),
    url('fonts/PT_Sans_Bold.svg#PT_Sans_Bold') format('svg');
}
@font-face {
    font-family: 'PT_Sans_BoldItalic';
    src: url('fonts/PT_Sans_BoldItalic.eot');
    src: url('fonts/PT_Sans_BoldItalic.eot') format('embedded-opentype'),
    url('fonts/PT_Sans_BoldItalic.woff2') format('woff2'),
    url('fonts/PT_Sans_BoldItalic.woff') format('woff'),
    url('fonts/PT_Sans_BoldItalic.ttf') format('truetype'),
    url('fonts/PT_Sans_BoldItalic.svg#PT_Sans_BoldItalic') format('svg');
}
@font-face {
    font-family: 'RubikLight';
    src: url('fonts/RubikLight.eot');
    src: url('fonts/RubikLight.eot') format('embedded-opentype'),
    url('fonts/RubikLight.woff2') format('woff2'),
    url('fonts/RubikLight.woff') format('woff'),
    url('fonts/RubikLight.ttf') format('truetype'),
    url('fonts/RubikLight.svg#RubikLight') format('svg');
}
body {
    min-width: 320px;
    font-size: 15px;
    color: #000;
    font-family: 'Arial', sans-serif;
}
.center_wrap {
    max-width: 1400px;
    margin: 0 auto;
}
.dt {
    display: table;
    box-sizing: border-box;
	max-width:1240px;
}
.dtc {
    display: table-cell;
    vertical-align: middle;
}
.dtc.vat {
    vertical-align: top;
}
.dtc.vab {
    vertical-align: middle;
}
.lsw-wrap {
    display: inline-block;
    margin: 30px 0 0 15px;
}
  .lsw-wrap .lang-item {
      display: inline;
      padding-right: 5px;
  }
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #868686;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #868686;
    opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #868686;
    opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    #868686;
}
::-ms-input-placeholder { /* Microsoft Edge */
    color:    #868686;
}
a,a:visited,a:hover,a:active {
    outline: none;
}
a {
    color: #6dc4df;
}
a:hover {
    text-decoration: none;
}
img {
    max-width: 100%;
    height: auto;
}
table img {
    max-width: 600px;
}
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
p {
    margin: 0 0 20px 0;
}
h1,h2,h3,h4,h5,h6 {
    margin: 0 0 20px 0;
    line-height: 1.2;
    font-family: 'PT_Sans_Bold';
    font-weight: normal;
}
h1,h2 {
    font-family: 'PT_Sans_Bold';
    color: #000;
}
h3,h4,h5,h6 {
    font-family: 'Arial', sans-serif;
    color: #3b819a;
}
h2 {
    font-size: 28px;
}
h3 {
    font-size: 21px;
}
input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea {
    border: 1px solid #09649f;
    padding: 5px 10px;
    box-sizing: border-box;
    width: 100%;
    max-width: 320px;
    margin-bottom: 20px;
	height: 40px;
	border-radius: 2px;
}
textarea {
    height: 100px;
    resize: vertical;
}
input[type="submit"], input[type="button"] {
    border: none;
	display: inline-block;
    text-decoration: none;
    background: #09649f;
    color: #fff;
    border-bottom: 2px solid #074167;
    border-radius: 3px;
    padding: 7px 20px;
    font-size: 15px;
    text-align: center;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
}
input[type="submit"]:hover, input[type="button"]:hover {
	background: #085689;
}
img.size-auto, img.size-full, img.size-large, img.size-medium, .attachment img {
    height: auto;
    max-width: 100%;
}
.alignleft, img.alignleft {
    display: inline;
    float: left;
    margin-right: 16px;
    margin-top: 4px;
}
.alignright, img.alignright {
    display: inline;
    float: right;
    margin-left: 16px;
    margin-top: 4px;
}
.aligncenter, img.aligncenter {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
img.alignleft, img.alignright, img.aligncenter , img.alignnone {
    margin-bottom: 12px;
}
img.alignleft, img.alignnone {
    margin-right: 10px;
}
.wpcf7-form-control-wrap {
    display: block;
    position: relative;
}
.wpcf7-not-valid-tip {
    position: absolute;
    font-size: 12px !important;
    right: 5px;
    top: 2px;
}
.wpcf7-validation-errors, .ajax-loader {
    display: none !important;
}
.page_content {
	max-width:925px;
}
.tablesorter, .tablesorter thead, .tablesorter tbody, .tablesorter tfoot, tr, th, td {
	margin:0;
	padding:0;
}
.tablesorter {
	font-size: 13px;
	margin:auto 2px 2px auto;
}
.tablesorter thead tr th, .tablesorter tfoot tr th {
	font-weight: 100;
	background-color:#e6eeee;
	border: 1px solid #ccc;
}
.tablesorter tbody tr td{
	height:20px;
	border: 1px solid #ccc;
	text-align:center;
	vertical-align:baseline;
}
.tablesorter tbody tr:nth-child(odd) td{
	background-color:#e8f6fb;
}
.page_content table {
    max-width: 100% !important;
    border-collapse: collapse;
}
.page_content > table  {
    margin-bottom: 20px;
}
.page_content table td, .page_content table th {
    width: auto !important;
    padding: 5px;
}
.page_content ol {
    margin-left: 25px;
	padding-left: 15px;
}
.page_content > ol {
    margin-bottom: 20px;
}
.page_content ol li{
    list-style: decimal;
}
.page_content ul {
    margin-left: 0;
}
.page_content ul ul {
    margin-left: 20px;
}
.page_content > ul {
    margin-bottom: 20px;
}
.page_content ul li{
    list-style: none;
    padding-left: 25px;
    position: relative;
    margin-top: 10px;
}
.page_content ul li:first-child {
    margin-top: 0;
}
.page_content ul li::before {
    display: block;
    content: "—";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
}
#linkShowAll, #linkHideAll{
	cursor:pointer;
}
#metrowrapper{
    overflow: scroll;
	margin:10px auto;
}
.tablesorter tbody tr td:nth-child(2), .tablesorter thead tr th:nth-child(2), .tablesorter tfoot tr th:nth-child(2){
    display: none;
}
.tablesorter tbody tr td:nth-child(6), .tablesorter thead tr th:nth-child(6), .tablesorter tfoot tr th:nth-child(6){
    display: none;
}
.tablesorter tbody tr td:nth-child(7), .tablesorter thead tr th:nth-child(7), .tablesorter tfoot tr th:nth-child(7){
    display: none;
}
.tablesorter tbody tr td:nth-child(8), .tablesorter thead tr th:nth-child(8), .tablesorter tfoot tr th:nth-child(8){
    display: none;
}
.tablesorter tbody tr td:nth-child(9), .tablesorter thead tr th:nth-child(9), .tablesorter tfoot tr th:nth-child(9){
    display: none;
}
.tablesorter tbody tr td:nth-child(11), .tablesorter thead tr th:nth-child(11), .tablesorter tfoot tr th:nth-child(11){
    display: none;
}
.tablesorter tbody tr td:nth-child(13), .tablesorter thead tr th:nth-child(13), .tablesorter tfoot tr th:nth-child(13){
    display: none;
}
.tablesorter tbody tr td:nth-child(15), .tablesorter thead tr th:nth-child(15), .tablesorter tfoot tr th:nth-child(15){
    display: none;
}
pre {
    page-break-inside:avoid;
    display:block;
    padding:9.5px;
    margin:0 0 10px;
    font-size:13px;
    line-height:20px;
    word-break:break-all;
    word-wrap:break-word;
    white-space:pre;
    white-space:pre-wrap;
    background-color:#f5f5f5;
    border:1px solid #ccc;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
}
.page_content h2, .page_content h3, .page_content h4, .page_content h5, .page_content h6 {
    margin-top: 40px;
}
form br {
    display: none;
}
.mobile_menu_opener {
    display: none;
    cursor: pointer;
    background: url("../img/burger.png");
    width: 34px;
    height: 28px;
    position: fixed;
    z-index: 2000;
    right: 15px;
    top: 15px;
}
.mobile_menu {
    position: fixed;
    right: 0;
    top: 0px;
    z-index: 1000;
    display: none;
}
.mobile_menu ul {
    background: #fff;
    padding: 15px 60px 15px 15px;
    width: 250px;
    box-sizing: border-box;
    box-shadow: -3px 3px 3px rgba(0,0,0,0.15);
}
.mobile_menu ul li:first-child {
    margin-top: 0px;
}
.mobile_menu ul li {
    margin-top: 10px;
}
.mobile_menu ul li a:hover, .mobile_menu ul li.current-menu-item a {
    color: #193e73;
}
.mobile_menu ul li a {
    color: #333;
    text-decoration: none;
    text-transform: uppercase;
}
.mobile_menu ul  ul {
	display: none;
}
#top {
    padding: 10px 0;
    background: #fff;
}
.logo {
    width: 400px;
}
.mob_sep {
    height: 1px;
    width: 100%;
    display: none;
}
.logo a {
    text-decoration: none;
}
.logo .dtc:first-child {
    width: 167px;
}
.descriptor span {
    color: #6e7585;
    font-family: 'RubikLight';
    display: block;
    font-size: 15px;
    line-height: 15px;
    margin-top: 7px;
}
.search_wrap {
    padding-left: 130px;
}
.front_search{
	padding-left:500px;
}
body.inner_page #top .search_wrap {
    width: 460px;
    padding-right: 80px;
    box-sizing: border-box;
}
.search_wrap form {
    width: 100%;
    max-width: 528px;
    box-sizing: border-box;
    border: 1px solid #6e7585;
    height: 35px;
    border-radius: 2px;
}
.search_wrap input {
    border: none;
    background: none;
    width: 100%;
    max-width: 100%;
    height: 33px;
    margin: 0;
    font-family: 'PT_Sans';
    font-size: 16px;
}
.search_wrap .dtc + .dtc {
    width: 33px;
}
.search_wrap input[type="submit"] {
    width: 33px;
    padding: 0;
    text-indent: -999px;
    background: url("../img/search_icon.png") center center no-repeat;
}
#main_nav {
    background: #213540;
}
.main_menu {
    font-size: 0;
}
.main_menu > li {
    display: inline-block;
    position: relative;
    font-size: 14px;
}
.main_menu > li > a {
    display: block;
    color: #fff;
    font-family: 'PT_Sans_Bold';
    font-size: 14px;
    text-decoration: none;
    box-sizing: border-box;
    height: 34px;
    line-height: 32px;
    border-bottom: 3px solid transparent;
    padding: 0 26px;
    text-transform: uppercase;
}
.main_menu > li:hover > a {
    background: #254c62;
    border-color: #6dc4df;
}
.main_menu > li ul {
	position: absolute;
	left: 0;
	top: -999em;
	background: #213540;
	width: 100%;
	z-index: 1000;
	opacity: 0;
	transition: opacity 0.3s linear 0s;
}
.main_menu > li:last-child ul {
	right: 0;
	left: auto;
} 
.main_menu > li:hover ul {
	opacity: 1;
	top: 100%;
}
.main_menu > li ul li a {
	display: block;
	color: #fff;
	padding: 7px 25px;
	text-transform: uppercase;
	text-decoration: none;
	font-family: 'PT_Sans_Bold';
	font-size: 12px;
}
.main_menu > li ul li a:hover, .main_menu > li ul li.current-menu-item a {
	background: #254c62;
}
#main_slider {
    padding: 20px 0;
    background: #204f6e;
}
#main_slider .center_wrap > .dt > .dtc {
    width: 50%;
    box-sizing: border-box;
}
#main_slider .center_wrap > .dt > .dtc:first-child {
    padding-right: 10px;
}
.main_slider_block {
    width: 610px;
}
.main_slider {
    position: relative;
    padding-bottom: 20px;
}
.main_slide {
    position: relative;
}
.main_slide_over {
    position: absolute;
    bottom: 17px;
    left: 24px;
}
.main_slide_over p {
    font-size: 28px;
    line-height: 34px;
    font-family: 'PT_Sans';
    margin-bottom: 10px;
    color: #fff;
}
.main_slide_over p a {
	text-decoration: none;
	color: #fff;
}
.main_slide_over p a:hover {
	text-decoration: underline;
}
.button {
    display: inline-block;
    text-decoration: none;
    background: #6dc4df;
    border-bottom: 2px solid #39819a;
    border-radius: 3px;
    color: #000;
    padding: 7px 20px;
    font-size: 15px;
    text-align: center;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
}
.button:hover {
    background: #5babc4;
}
.button.blue_button {
    background: #09649f;
    border-color: #074167;
    color: #fff;
}
.button.blue_button:hover {
    background: #085689;
}
.block_title {
    font-family: 'PT_Sans_Bold';
    font-size: 26px;
    line-height: 32px;
    color: #000;
    position: relative;
    padding-left: 12px;
}
.tac {
    text-align: center;
}
.block_title.big.not_found{
	text-align:center;
}
.block_title.no_border {
    padding-left: 0;
    border: none;
}
.block_title.no_border::before {
    display: none;
}
.block_title.big, h1 {
    background: #eaecee;
    font-size: 32px;
    line-height: 36px;
    padding: 6px 20px 10px 20px;
    border-left: 5px solid #6dc4df;
}
.block_title::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    bottom: 3px;
    width: 4px;
    background: #6dc4df;
}
.block_title.big::before {
    display: none;
}

.owl-dots {
    text-align: center;
    font-size: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
}
.owl-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #b6bac4;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 0 5px;
}
.owl-dot.active {
    border-color: #6dc4df;
    background: #6dc4df;
}
.main_events_block .block_title {
    margin-bottom: 10px;
    margin-left: 10px;
    color: #fff;
}
.main_event_block {
    padding: 10px;
}
.main_events_block .button {
    margin: 10px 0 0 10px;
}
.main_event_block:hover {
    background: #37617d;
}
.main_event_icon {
    width: 84px;
}
.main_event_info {
    padding-left: 10px;
}
.main_event_info p {
    margin: 0;
}
.main_event_info a {
    text-decoration: none;
    color: #fff;
}
.main_event_date {
    font-size: 13px;
    color: #b6bac4;
}
#content_section {
    padding: 40px 0;
    overflow: hidden;
}
.sidebar {
    width: 295px;
	position: relative;
}
.side_fixed {
	width: 295px;
	
}
.side_fixed.fixed {
	position: absolute;
}
.content_column {
    padding-right: 20px;
}
.side_popular_articles {
    margin-right: -10px;
    background: #eaecee;
    padding: 20px 0;
    margin-bottom: 20px;
}
.side_popular_articles .block_title {
    margin-left: 10px;
}
.side_popular_article_block {
    border-top: 1px solid #d1d3d5;
    padding: 10px;
}
.side_popular_article_block:first-child {
    border: none;
}
.side_popular_article_block_img {
    width: 84px;
}
.side_popular_article_block_info {
    padding-left: 10px;
}
.side_popular_article_block_info p {
    margin: 0;
}
.side_popular_article_block_info a {
    color: #3b819a;
    text-decoration: none;
}
.side_popular_article_block_info a:hover {
    color: #09568a;
}
.side_article_block_date {
    font-size: 13px;
    color: #98999a;
}
.sidebar_reklama_block {
    border: 1px solid #d7d7d7;
    text-align: center;
    margin-right: -10px;
	margin-top: 20px;
}
.post_content_holder{
	max-width:925px;
}
.content_holder_not_found{
	width:925px;
}
.main_page_blog {
    border: none;
    padding-bottom: 50px;
	max-width:925px;
}
body.home .main_page_blog {
    padding-bottom: 25px;
    border-bottom: 3px solid #eaecee;
}
.main_page_blocks {
    font-size: 0;
    margin: 0 -10px;
}
.main_page_block {
    display: inline-block;
    vertical-align: top;
    width: 33.3333%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 35px;
    font-size: 15px;
}
.main_page_block_img {
    position: relative;
    margin-bottom: 20px;
}
.main_page_block_cat {
    position: absolute;
    text-transform: uppercase;
    top: 4px;
    right: 4px;
}
.main_page_block_cat a {
    font-size: 13px;
    font-family: 'PT_Sans';
    text-decoration: none;
    display: inline-block;
    color: #fff;
    padding: 7px 10px;
    border-radius: 2px;
}
.main_page_block_cat a:hover {
	text-decoration: underline;
}
.main_page_block_cat.green a {
    background: rgba(0, 88, 38, 0.65);
}
.main_page_block_cat.green a:hover {
    background: rgba(0, 88, 38, 1);
}
.main_page_block_cat.violet a {
    background: rgba(122,0,38,0.65);
}
.main_page_block_cat.violet a:hover {
    background: rgba(122,0,38,1);
}
.main_page_block_cat.blue a {
    background: rgba(0,54,99,0.65);
}
.main_page_block_cat.blue a:hover {
    background: rgba(0,54,99,1);
}
.main_page_block_cat.red a {
    background: rgba(255,0,0,0.65);
}
.main_page_block_cat.red a:hover {
    background: rgba(255,0,0,1);
}
.main_page_block_title {
    font-size: 20px;
    line-height: 24px;
    font-family: 'PT_Sans_Bold';
    margin-bottom: 5px;
}
.main_page_block_title a {
    color: #000;
    text-decoration: none;
}
.main_page_block_title a:hover {
    color: #09568a;
}
.main_page_block_text {
    margin: 0;
    font-size: 15px;
    line-height: 21px;
}
.button_to_center {
    text-align: center;
}
.main_page_blog .button {
    width: 212px;
}
.main_page_events_block {
    padding-top: 20px;
    margin-bottom: 20px;
}
.main_page_events {
    width: 440px;
    padding-right: 15px;
    box-sizing: border-box;
    padding-top: 20px;
}
.main_page_events .block_title a {
	color: #000;
	text-decoration: none;
}
.main_page_events .block_title a:hover {
	text-decoration: underline;
}
.main_page_event_block {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #d7d7d7;
}
.main_page_event_block:first-child {
    border: none;
    margin-top: 0;
    padding-top: 0;
}
.main_page_event_block_img {
    width: 85px;
}
.main_page_event_block_info {
    padding-left: 10px;
}
.main_page_event_block_info p {
    margin: 0;
}
.main_page_event_date {
    color: #3b819a;
    font-size: 17px;
    line-height: 21px;
    font-family: 'PT_Sans_Bold';
    margin: 0;
}
.main_page_event_block_info a {
    text-decoration: none;
    color: #000;
}
.main_page_event_block_info a:hover {
    color: #f00;
}
.day_quote {
    background: #eaecee;
    padding: 20px 20px 30px 20px;
}
.day_quote .block_title {
    padding: 0;
    border: none;
}
.day_quote .block_title::before {
    display: none;
}
.day_quote_text {
    font-size: 25px;
    line-height: 28px;
    font-family: 'PT_Sans';
    border-bottom: 4px solid #6dc4df;
    padding-top: 40px;
    margin-top: 45px;
    position: relative;
}
.day_quote_text::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: -25px;
    width: 55px;
    height: 47px;
    background: url("../img/quote.png");
}
.day_quote_text::after {
    display: block;
    content: "";
    position: absolute;
    left: 75px;
    top: 0;
    right: 0;
    height: 4px;
    background: #6dc4df;
}
.day_quote_text a {
	color: #000;
	text-decoration: none;
}
.day_quote_text a:hover {
	text-decoration: underline;
}
.day_quote_text span.bold {
    font-family: 'PT_Sans_Bold';
}
.main_page_interactive_map {
    position: relative;
    margin-bottom: 20px;
    padding: 20px 30px;
    color: #fff;
    font-family: 'PT_Sans';
    font-size: 21px;
    line-height: 26px;
    height: 262px;
    box-sizing: border-box;
    background: url("../img/main_page_interactive_map.jpg") center center no-repeat;
    background-size: cover;
}

.main_page_interactive_map .block_title {
    border: none;
    padding: 0;
    color: #fff;
    margin-bottom: 5px;
}
.main_page_interactive_map .block_title a {
	color: #fff;
	text-decoration: none;
}
.main_page_interactive_map .block_title a:hover {
	text-decoration: underline;
}
.main_page_interactive_map .block_title::before {
    display: none;
}
.publication_block {
    border: 1px solid #bebebe;
    padding: 15px 30px 15px 165px;
    background: #fff url("../img/publication_bg.png") 0 0 no-repeat;
    background-size: auto 100%;
    font-size: 17px;
    line-height: 22px;
    color: #6e7585;
    font-family: 'PT_Sans_Bold';
    margin-bottom: 40px;
}
.publication_block p {
    margin: 0;
}
.publication_block .block_title {
    padding: 0;
    border: none;
    margin-bottom: 10px;
}
.publication_block .block_title::before {
    display: none;
}
.publication_block .dtc + .dtc {
    width: 212px;
}
.publication_block .button {
    width: 100%;
}
.subscribe_block {
    color: #fff;
    background: #204f6e url("../img/subscribe_bg.png") right top no-repeat;
    background-size: auto 100%;
    padding: 35px 20px 35px 30px;
}
.inner_page .subscribe_block {
	margin-bottom: 30px;
}
.subscribe_block .block_title {
    color: #fff;
    padding: 0;
    border: none;
}
.subscribe_block .block_title::before {
    display: none;
}
#footer {
    background: #3d4147;
    padding: 40px 10px;
    font-size: 13px;
    color: #a3a3a3;
}
#footer a {
    text-decoration: none;
    color: #a3a3a3;
}
#footer a:hover {
    text-decoration: underline;
}
#footer li {
    margin-top: 10px;
}
#footer li:first-child {
    margin-top: 0;
}
.footer_menu_1, .footer_menu_2 {
    max-width: 240px;
	padding-right:5px;
}
.footer_social {
    width: 210px;
}
.footer_social a {
    display: block;
    padding-left: 40px;
    height: 33px;
    line-height: 33px;
}
.footerflex{
	display:flex;
	justify-content:space-between;
	max-width:925px;
}
.face_link {
    background: url("../img/face_icon.png") left center no-repeat;
}
.vk_link {
    background: url("../img/vk_icon.png") left center no-repeat;
}
.youtube_link {
    background: url("../img/youtube_icon.png") left center no-repeat;
}
.twitter_link {
    background: url("../img/twitter_icon.png") left center no-repeat;
}
#breadcrumbs {
    padding: 20px 0 0 0;
    color: #3b819a;
    font-size: 0;
}
#breadcrumbs li {
    display: inline-block;
    font-size: 13px;
    padding-left: 12px;
    position: relative;
}
#breadcrumbs li::before {
    display: block;
    content: "/";
    position: absolute;
    left: 3px;
    top: 0;
}
#breadcrumbs li:first-child {
    padding-left: 0;
}
#breadcrumbs li:first-child::before {
    display: none;
}
#breadcrumbs a {
    color: #3b819a;
}
.cat_search_wrap {
    padding-top: 10px;
}
.cat_search {
    width: 30%;
    float: right;
    padding: 0;
    text-align: right;
}
.cat_search_margin {
	padding: 20px 0;
	clear: both;
}
.cat_search form {
    max-width: 348px;
    display: inline-block;
}
.choose_cat_theme {
    font-size: 16px;
    color: #868686;
    line-height: 35px;
    font-family: 'PT_Sans';
}
.choose_cat_theme p {
    margin: 0;
}
.cat_theme_selector {
    padding: 15px 0 45px;
}
.tab_selector {
    font-size: 0;
}
.tab_selector li {
    display: inline-block;
    margin-right: 5px;
    font-size: 14px;
    color: #3b819a;
    font-family: 'PT_Sans_Bold';
    padding: 8px 10px;
    cursor: pointer;
    text-transform: uppercase;
}
.tab_selector li span {
    text-decoration: underline;
}
.tab_selector li:hover span {
    text-decoration: none;
}
.tab_selector li.active {
    background: #f2f3f5;
    cursor: default;
}
.tab_selector li.active span {
    text-decoration: none;
    color: #777d8c;
}
.tab_selector li a {
	color: #3b819a;
}
.tab_selector li.active a {
	text-decoration: none;
}
.tab {
    display: none;
}
.tab.visible {
    display: block;
}
.choose_region {
    padding-bottom: 40px;
    font-size: 16px;
    font-family: 'PT_Sans';
    color: #868686;
}
.choose_country, .choose_city {
    display: inline-block;
    vertical-align: top;
    width: 260px;
}
.choose_region_or {
	display: inline-block;
	vertical-align: top;
	margin: 0 20px;
}
.choose_country {
    margin-left: 0;
	position: relative;
	z-index: 2;
}
.custom_select {
    position: relative;
    cursor: pointer;
}
.choose_city {
	position: relative;
	z-index: 1;
}
.custom_select_text {
    height: 35px;
    border-radius: 2px;
    line-height: 33px;
    border: 1px solid #6e7585;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'PT_Sans';
    color: #868686;
    position: relative;
    padding: 0 25px 0 10px;
    z-index: 20;
    background: #fff;
    margin: 0;
}
.custom_select_text:hover {
    border-color: #3b819a;
}
.custom_select_text::after {
    display: block;
    content: "";
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -2px;
    border-top: 5px solid #000;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
}
.custom_select .custom_select_list {
    position: absolute;
    left: 0;
    right: 0;
    border: 1px solid #eaecee;
    box-shadow: 0 13px 18.8px 1.2px rgba(0, 0, 0, 0.24);
    background: #fff;
    z-index: 10;
    margin-top: -1px;
    padding: 10px 0;
    opacity: 0;
    top: -9999px;
    transition: opacity 0.3s linear 0s;
}
.custom_select:hover .custom_select_list {
    top: 100%;
    opacity: 1;
}
.custom_select_list li {
    cursor: pointer;
    padding: 1px 10px 2px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
}
.custom_select_list li a {
	color: #000;
	text-decoration: none;
	display: block;
}
.custom_select_list li:hover, .custom_select_list li.active {
    background: #f2f3f5;
    border-color: #eaecee;
}
.open_all {
    color: #3b819a;
    cursor: pointer;
    text-decoration: underline;
    display: inline-block;
    padding: 5px 0 0 10px;
}
.main_article {
    margin-bottom: 45px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    height: 360px;
    background-position: center center;
    text-align: center;
    color: #fff;
    padding-top: 100px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 46px;
    line-height: 48px;
    font-family: 'PT_Sans_Bold';
    box-sizing: border-box;
}
.main_article a {
    line-height: 21px;
}
.page_content_links {
    font-size: 0;
    margin-bottom: 20px;
}
.page_content_links li {
    display: inline-block;
    margin-right: 5px;
}
.page_content_links a {
    display: inline-block;
    font-size: 14px;
    color: #3b819a;
    font-family: 'PT_Sans_Bold';
    padding: 8px 10px;
    cursor: pointer;
    text-transform: uppercase;
}
.page_content_links a:hover {
    text-decoration: none;
}
.page_content_links a.active {
    background: #f2f3f5;
    cursor: default;
    text-decoration: none;
    color: #777d8c;
}
.redact_person {
    margin-top: 30px;
}
.redact_person:first-child {
    margin-top: 0px;
}
.redact_person_img {
    width: 160px;
}
.redact_person_info {
    padding-left: 20px;
}
.redact_person_info .redact_person_dol {
    font-size: 18px;
    color: #000;
    margin-bottom: 0px;
    font-family: 'PT_Sans';
}
.redact_person_info .redact_person_name {
    font-size: 28px;
    font-family: 'PT_Sans_Bold';
    margin-bottom: 10px;
}
.redact_person_info .redact_person_phone {
    font-size: 20px;
    margin: 0;
}
.redact_person_info .redact_person_phone span {
    font-size: 15px;
    color: #868686;
}
.get_visitors_orders {
    background: #204f6e url("../img/get_order_bg.png") right top no-repeat;
    background-size: auto 100%;
    color: #c8ccd7;
    font-size: 17px;
    font-family: 'PT_Sans_Bold';
    padding: 30px 30px 20px 30px;
}
.get_visitors_orders p {
    margin-bottom: 10px;
}
.get_visitors_orders .block_title {
    color: #fff;
    margin-bottom: 15px;
}
.get_visitors_orders .button {
    margin-top: 10px;
}
.print_version {
    margin: 30px 0;
}
.print_version a {
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    color: #3b819a;
}
.print_version a:first-child {
	padding-left: 30px;
    background: url("../img/print_icon.png") left center no-repeat;
	margin-right: 20px;
}
.send_to_email {
	padding-left: 30px;
	background: url("../img/email_icon.png") left center no-repeat;
}
.article_meta {
    margin-bottom: 5px;
}
.article_meta .dtc:first-child {
    width: 120px;
    color: #868686;
}
.article_author_name {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}
.article_author_dol {
    font-size: 15px;
    line-height: 21px;
}
.article_date {
    font-size: 15px;
	color:#868686;
	float:right;
	margin-right:4px;
	margin-left:4px;
}
.article_meta_date {
    margin-top: 10px;
}
.article_meta_date p {
    margin: 0;
}
.article_meta_date a {
    font-size: 16px;
    text-decoration: none;
    color: #3b819a;
    font-family: 'PT_Sans';
}
.wp-caption-text {
    color: #868686;
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 35px;
}
blockquote {
    margin: 85px 60px 65px 105px;
    border-bottom: 2px solid #6dc4df;
    font-size: 22px;
    line-height: 36px;
    padding: 50px 55px 45px 0;
    position: relative;
}
blockquote::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: -20px;
    width: 44px;
    height: 37px;
    background: url("../img/blockquote.png");
}
blockquote::after {
    display: block;
    content: "";
    position: absolute;
    left: 120px;
    right: 0;
    top: 0;
    height: 2px;
    background: #6dc4df;
}
.article_tags {
    font-size: 0;
    margin-bottom: 20px;
}
.article_tags li {
    display: inline-block;
    margin-right: 5px;
}
.article_tags a {
    display: inline-block;
    font-size: 14px;
    color: #3b819a;
    font-family: 'PT_Sans_Bold';
    padding: 8px 10px;
    cursor: pointer;
    text-transform: uppercase;
}
.article_tags a:hover {
    text-decoration: none;
}
.article_tags a.active {
    background: #f2f3f5;
    cursor: default;
    text-decoration: none;
    color: #777d8c;
}
.dop_articles {
    background: #eaecee;
    padding: 20px 12px 12px 12px;
    margin-bottom: 40px;
}
.dop_articles .custom_select {
    max-width: 400px;
}
.dop_article_blocks {
    margin: 30px 0 0 -20px;
    font-size: 0;
}
.dop_article_block {
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: top;
    width: 33.3333%;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 21px;
}
.dop_article_img {
    width: 85px;
}
.dop_article_info {
    padding-left: 10px;
}
.dop_article_info p {
    margin: 0;
}
.dop_article_info a {
    color: #3b819a;
    text-decoration: none;
}
.dop_article_info a:hover {
    color: #f00;
}
.dop_article_date {
    font-size: 13px;
    color: #98999a;
}
.article_share {
    margin-bottom: 45px;
}
.comment_num {
    color: #868686;
    font-family: 'PT_Sans';
}
.popup_title {
	text-align: center;
	font-size: 30px;
	font-family: 'PT_Sans_Bold';
	background: #6dc4df;
	color: #fff;
	margin: 0;
	padding: 10px;
}
.popup_content {
	padding: 30px;
	background: #fff;
}
#publication_order, #reklama_order {
	max-width: 400px;	
}
.popup form {
	max-width: 300px;
	margin: 0 auto;
	text-align: center;
}
#thanks {
	text-align: center;
	font-size: 20px;
	font-family: 'PT_Sans'
}
p.article_date {
    font-size: 13px;
    color: #868686;
}
.interactive_map_wrap {
    margin-bottom: 50px;
}
.building_photos_block {
    margin-bottom: 50px;
}
.building_photos_block .custom_select {
    max-width: 400px;
}
.building_photos {
    margin: 30px -5px 0px -5px;
    font-size: 0;
}
.building_photo_block {
    width: 20%;
    padding: 0 5px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    font-size: 15px;
    margin-bottom: 15px;
}
.building_photo_block_img {
    margin-bottom: 7px;
}
.building_photo_block_img a {
    display: inline-block;
    position: relative;
}
.building_photo_block_img a::before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s linear 0s;
}
.building_photo_block_img a::after {
    display: block;
    content: "Посмотреть";
    position: absolute;
    color: #fff;
    font-size: 15px;
    padding-top: 50px;
    background: url("../img/eye_icon.png") center top no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 45px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s linear 0s;
}
.building_photo_block_img a:hover::before, .building_photo_block_img a:hover::after {
    opacity: 1;
}
.building_photo_block_title {
    margin: 0;
}
iframe {
	border: none;
}
.author_contacts_anchor span {
	cursor: pointer;
	color: #6dc4df;
	text-decoration: underline;
}
.author_contacts_anchor span:hover {
	text-decoration: none;
}
.auhtor_contacts_info {
	display: none;
	padding-top: 20px;
}
.auhtor_contacts_info p {
	margin: 0 0 10px 0;
}
.wp-pagenavi {
	font-size: 15px;
	padding: 30px 0 30px 10px;
}
.wp-pagenavi a, .wp-pagenavi span  {
	display: inline-block;
	height: 30px;
	padding: 0;
	text-align: center;
	line-height: 30px;
	border: none;
	background: #f5f5f5;
}
.wp-pagenavi a, .wp-pagenavi span.current {
	width: 30px;
} 
.contact_persons_block {
	margin: 50px 0;
}
.comment-form-author, .comment-form-email, .comment-form-url, .comment-notes, .article_comments_wrap label, .article_comments_wrap #reply-title {
    display: none;
}
.oneall_social_login {
    position: relative;
	text-align: center;
}
.oneall_social_login::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: 15px;
}
.oneall_social_login_providers {
    display: inline-block;
    width: 205px;
    height: 50px;
}
.article_comments_wrap textarea {
	max-width: 100%;
	height: 94px;
	border: 1px solid #d7d7d7;
}
.article_comments_wrap form p {
	margin: 0;
}
.logged-in-as {
	display: none !important;
}
#respond {
	margin-bottom: 50px;
}
.comment_avatar {
	width: 80px;
	padding-right: 15px;
	box-sizing: border-box;
}
.comment_avatar img {
	border-radius: 50%;
}
.comment_author_name {
	color: #000;
	font-size: 17px;
	font-style: italic;
	margin-right: 30px;
}
.comment_date {
	color: #bbbbbb;
	font-size: 14px;
}
.comment_text {
	padding-top: 10px;
	font-size: 14px;
	line-height: 21px;
	margin-bottom: 5px;
}
.child_comment {
	margin-left: 80px;
	border-left: 1px solid #d7d7d7;
	padding: 12px 0 12px 20px;
}
.comment_block > .dt + .child_comment {
	margin-top: 25px;
}
.wp-caption {
	max-width: 100% !important;
	width: auto !important;
}
.article_comments_wrap  > .comment_block  {
	margin-top: 25px;
}
.article_comments_wrap  > .comment_block:first-child  {
	margin-top: 0px;
}
.subscribe_agree_content {
	padding-top: 30px;
	display: none;
}
.subscribe_agree_head {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	padding: 5px 0;
	position: relative;
	width: 100%;
	max-width: 600px;
	padding-right: 20px;
	box-sizing: border-box;
}
.subscribe_agree_head label {
	cursor: pointer;
}
.subscribe_agree_head input {
	margin-right: 10px;
}
.subscribe_agree_form form input {
	margin: 0 0 5px 0;
}
.open_subscribe_text {
	display: inline-block;
	position: absolute;
	height: 20px;
	width: 20px;
	border-radius: 3px;
	right: 0;
	top: 50%;
	margin-top: -10px;
	background: #ccc;
	text-indent: -9999em;
	cursor: pointer;
}
.open_subscribe_text::after {
	display: block;
	content: "";
	border-top: 6px solid #000;
	border-bottom: 6px solid transparent;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	position: absolute;
	left: 50%;
	margin-left: -6px;
	top: 50%;
	margin-top: -3px;
}
.open_subscribe_text.opened::after {
	border-bottom: 6px solid #000;
	border-top: 6px solid transparent;
	margin-top: -9px;
}
input:disabled {
	opacity: 0.5;
}
.to_top {
	display: none;
	width: 50px;
	height: 50px;
	position: fixed;
	z-index: 100;
	bottom: 50px;
	right: 50px;
	border-radius: 50%;
	text-indent: -999em;
	background: rgba(45,130,155,0.7) url("../img/to_top.png") center center no-repeat;
	cursor: pointer;
}
.to_top:hover {
	background: rgba(45,130,155,1) url("../img/to_top.png") center center no-repeat;
}
.search_field {
	position: relative;
	width:100%;
}
.search_date_notice {
	display: none;
	content: "";
	position: absolute;
	background: #fff;
	left: 0;
	right: 0;
	top: 100%;
	padding: 5px;
	font-size: 14px;
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
	margin-top: 5px;
	border-radius: 3px;
	text-align: left;
}
.conf_agree {
    font-size: 12px;
    line-height: 18px;
    color: #7b8397;
    text-align: left;
}
.article_comments_wrap .conf_agree {
	display: none;
}
.article_comments_wrap .form-submit .conf_agree {
	display: inline-block;
}
.conf_agree .agree.checked {
    background: url("../img/agree_check.png") 0 0 no-repeat;
}
.conf_agree .agree {
    display: block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background: url("../img/agree_check.png") 0 -16px no-repeat;
    margin-top: 2px;
}
.form-submit input[type="submit"] {
	display: inline-block;
	vertical-align: middle;
	margin-right: 20px;
}
.form-submit .conf_agree {
	display: inline-block;
	vertical-align: middle;
}
.form-submit .conf_agree br {
	display: inline;
}
.conf_agree .dtc:first-child {
	padding-right: 6px;
}
#conf {
	max-width: 1000px;
}
.screen-reader-text {
	display: none;
}
.page_content #searchform input {
	display: block;
	width: 100%;
	max-width: 320px;
}
.search_razdel_title {
	font-size: 20px;
	font-weight: bold;
}
.copyright {
	font-size: 14px;
}
input.no_valid {
	box-shadow: 0 0 5px rgba(255,0,0,0.8);
}
.popup .conf_agree {
	margin-top: 15px;
}
.article_header{
	font-size:16pt;
	margin:5px auto;
}
/*.subsc{
	padding-left: 500px;
}*/
.event_search{
	float:left;
	width:40%;
}
span .wpcf7-list-item label {
	margin-left:-1em;
}

/******           Subscription page            *******/
.subscribe_content{
	background: url("../img/bg_subscription.jpg") center center no-repeat;
	background-size: cover;
	width:100vw;
	height:85vh;
}
.subscribe_content__block{
	display:flex;
	justify-content:center;
	align-items:center;
	height:100%;
}
.subscribe_content__block__form{
	padding:40px 80px;
	background-color:rgba(234,236,238,0.8);
}
.subscribe_content_font{
	color:#204f6e;
	font-family:'PT_Sans_Bold';
	text-align:justify;
}
.sub_head{
	font-size:22pt;
	margin:0;
}
.sub_second{
	font-size:16pt;
	letter-spacing:1.2px;
	margin-bottom:40px;
}
.sub_above_field{
	font-size:13pt;
}
.sub_under_field{
	font-size:9pt;
	letter-spacing:0.5px;
}
.sub_social_net{
	font-size:14pt;
	margin-top:40px;
}
.social_net{
	margin-top:40px;
	text-align:center;
}
.social_net__text{
	text-align:center;
	margin-bottom:10px;
}
.social_networks{
	display:inline-block;
	vertical-align:bottom;
	height:54px;
	width:54px;
	margin:0 6px 6px 0;
	padding:0;
}
.social_net__fb{
	background: url(http://undergroundexpert.info/wp-content/themes/shablon/share42/icons.png) -0px 0 no-repeat;
}
.social_net__vk{
	background: url(http://undergroundexpert.info/wp-content/themes/shablon/share42/icons.png) -54px 0 no-repeat;
}
.social_net__tw{
	background: url(http://undergroundexpert.info/wp-content/themes/shablon/share42/icons.png) -108px 0 no-repeat;
}


/******              Successful subscription page            *******/
.subscribe_sc_content__block__form{
	padding:80px 60px;
	background-color:rgba(234,236,238,0.8);
}
.subscribe_sc_content_font{
	color:#204f6e;
	font-family:'PT_Sans_Bold';
	text-align:center;
	margin-bottom:0;
}
.sub_sc_head{
	font-size:22pt;
}
.sub_sc_second{
	font-size:18pt;
}
.sub_sc_footer{
	margin-top:40px;	
	font-size:10pt;
}
/******           Successful unsubscription page               *******/
.unsubscribe_sc_content__block__form{
	padding:40px;
	background-color:rgba(234,236,238,0.8);
}
.unsub_sc_frst, .unsub_sc_scnd{
	font-size:18pt;
	margin-bottom:8px;
}
.unsub_sc_frst{
	letter-spacing:1.2px;
}
.unsub_sc_scnd{
	letter-spacing:-0.8px;
}
.unsub_sc_thrd, .unsub_sc_forth{
	font-size:22pt;
}
.unsub_sc_thrd{
	margin-bottom:0;
}
.unsub_sc_forth{
	margin-bottom:40px;	
}
.unsub_sc_footer{
	font-size:12pt;
	margin-bottom:10px;
}
.unsub_sc_footer a{
	color:#1da4df;
}
/******        Registration successfully        ******/
.reg_head{
	text-align:center;
	font-size:20pt;
}
.reg_cont{
	margin:0;
	font-size:12pt;
	text-align:center;
}
.reg_rows{
	margin:10px;
	font-size:11pt;
}
.reg_rows a{
	color:#1da4df;
}
/* ==========================================================================
   Media Queries
   ========================================================================== */
/* *****     Min-width   *****    */
@media (min-width: 1024px){
	.subscribe_page{
		min-width:716px;
	}
}
@media (min-width: 1240px){
	.subscribe_page{
		min-width:890px;
	}
}
@media (min-width: 1271px){
	.dtc.vab.btn{
	vertical-align:middle;
	}
	.button.blue_button.btn_en{
	margin-left:150px;
	}
}
/* *****     Max-width   *****    */
@media (max-width: 1440px){
	.side_popular_articles, .sidebar_reklama_block{
		margin-right:1vw;
	}
	#breadcrumbs, #content_section{
		padding-left:1vw;
	}
}
@media (max-width: 1270px) {
    .center_wrap {
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        max-width: 100%;
    }
	.front_search{
    padding-left: 330px;
	}
	/*.subsc{
		padding-left:320px;
	}*/
    .main_menu > li > a {
        padding: 0 11px;
    }
    .main_slider_block {
        width: 550px;
    }
    .main_event_info p {
        line-height: 1.2;
    }
    .main_page_events {
        width: 50%;
    }
    .side_popular_articles, .sidebar_reklama_block {
        margin-right: 0;
    }
    .publication_block .dtc {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }
    .publication_block .button {
        margin-top: 10px;
    }
    .subscribe_block {
        position: relative;
    }
    .subscribe_block::before {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background: rgba(30,80,110,0.7);
    }
    .subscribe_block * {
        position: relative;
        z-index: 2;
    }
    .publication_block {
        position: relative;
    }
    .publication_block::before {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background: rgba(255,255,255,0.7);
    }
    .publication_block * {
        position: relative;
        z-index: 2;
    }
    body.inner_page #top .search_wrap {
        width: 400px;
        padding-right: 40px;
        padding-left: 100px;
    }
    .get_visitors_orders {
        position: relative;
    }
    .get_visitors_orders::before {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background: rgba(30,80,110,0.7);
    }
    .get_visitors_orders * {
        position: relative;
        z-index: 2;
    }
}
@media (max-width: 1100px) {
    .main_menu > li > a {
        padding: 0 6px;
    }
    body.inner_page #top .search_wrap {
        width: 350px;
        padding-right: 40px;
        padding-left: 50px;
    }
    .dop_article_block {
        width: 50%;
    }
	.main_menu > li ul {
		min-width: 250px;
	}
	/*.subsc{
		padding-left:260px;
	}*/
}
@media (max-width: 1023px) {
    .mobile_menu_opener {
        display: block;
    }
    #top {
        text-align: center;
    }
    .mob_sep {
        display: block;
    }
    .logo {
        display: inline-block;
        width: auto;
        margin: 0 auto 20px;
        text-align: left;
    }
    #top .search_wrap {
        padding: 0;
        width: 400px;
        margin: 0 auto;
        display: inline-block;
    }
    #main_nav {
        display: none;
    }
    #main_slider .center_wrap > .dt > .dtc {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    #main_slider .center_wrap > .dt > .dtc:first-child {
        padding: 0;
    }
    .main_slider_block {
        width: 610px;
        margin: 0 auto 30px;
    }
    .main_events_block {
        max-width: 610px;
        margin: 0 auto;
    }
    .content_column, .sidebar {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    .sidebar {
        padding-top: 30px;
    }
    .main_page_block_img img {
        width: 100%;
    }
    .main_page_interactive_map img {
        width: 100%;
    }
    .footer_menu_1 {
        width: 33%;
    }
    body.inner_page #top .search_wrap, body.inner_page #top .top_subscribe_wrap {
        display: inline-block;
        width: 230px;
        padding: 0;
        margin: 0;
    }
    body.inner_page #top .search_wrap {
        margin-right: 30px;
    }
	.side_fixed {
		width: 100%;
	}
}
@media(max-width:767px) {
	.breadcrumbs{
		text-align:center;
	}
	.article_date{
		float:none;
		padding-top:10px;
	}
	.print_version{
		margin-bottom:10px;
	}
	.page_content{
		max-width:95vw;
	}
	.wraptablehead{
		overflow:scroll;
		font-size:13px;
	}
	.tablehead table tbody tr td{
		max-width:90px;
	}
	.article_comments_wrap textarea, .conf_agree{
		max-width:90vw;
	}
    #main_slider .center_wrap > .dt {
        display: block;
        width: 100%;
    }
    .main_slider_block {
        width: 100%;
        max-width: 610px;
        margin: 0 auto 20px;
    }
    .main_page_block {
        width: 50%;
    }
    .main_page_events_block > .dt > .dtc {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    .main_page_events {
        margin-bottom: 30px;
    }
    .main_page_interactive_map br {
        display: none;
    }
    blockquote {
        margin: 50px;
    }
    .main_article {
        padding: 50px 30px;
        height: auto;
        font-size: 35px;
        line-height: 40px;
    }
    .comment_avatar {
		width: 60px;
		padding-right: 10px;
	}
	.child_comment {
		margin-left: 60px;
		padding-left: 10px;
	}
	.form-submit .conf_agree {
		display: block;
		margin-top: 10px;
	}
	.choose_region_or {
		margin: 0 7px;
	}
	
    .lsw-wrap {
	margin-top: 5px;
    }
}
@media (max-width: 599px) {
    .main_slide_over br {
        display: none;
    }
    .block_title.big, h1 {
        font-size: 27px;
        line-height: 30px;
    }
    .publication_block {
        padding: 30px;
    }
    #footer {
        font-size: 0;
    }
    .footer_menu_1, .footer_menu_2 {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        font-size: 15px;
    }
    .footer_social {
        display: block;
        width: 100%;
        font-size: 15px;
        margin-top: 30px;
    }
	.footerflex{
		display:block;
	}
    .cat_search {
        float: none;
        width: 100%;
        text-align: left;
    }
    .cat_search form {
        max-width: 100%;
    }
    body.inner_page #top .search_wrap, body.inner_page #top .top_subscribe_wrap {
        width: 210px;
    }
    body.inner_page #top .search_wrap {
        margin-right: 15px;
    }
    .top_subscribe_wrap .button {
        padding-left: 10px;
        padding-right: 10px;
    }
    .dop_article_block {
        width: 100%;
    }
    .choose_country, .choose_city {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
        margin: 0;
    }
    .choose_country {
        margin-bottom: 20px;
    }
	.choose_region_or {
		margin: 0 0 20px;
	}
	.copyright {
		padding-top: 15px;
	}
}
@media (max-width: 479px) {
    .dt{
		display:block;
	}
	.logo {
        display: block;
        width: 100%;
    }
    .logo .dtc, .logo .dtc:first-child {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
    }
    #top .search_wrap {
        width: 100%;
    }
    .main_slide_over {
        left: 5px;
        bottom: 5px;
    }
    .main_slide_over p {
        font-size: 18px;
        line-height: 20px;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.7);
    }
    .main_page_blocks {
        margin: 0;
    }
    .main_page_block {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }
    .footer_menu_1, .footer_menu_2 {
        display: block;
        width: 100%;
    }
    .footer_menu_2 {
        margin-top: 12px;
    }
    body.inner_page #top .search_wrap, body.inner_page #top .top_subscribe_wrap {
        display: block;
        margin: 0 auto;
    }
    body.inner_page #top .search_wrap {
        margin-bottom: 15px;
    }
    .article_meta .dtc {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    blockquote {
        margin-left: 0;
        margin-right: 0;
        padding-top: 40px;
        padding-bottom: 30px;
    }
    .main_article {
        padding: 30px;
        font-size: 28px;
        line-height: 32px;
    }
    .redact_person {
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
    }
    .redact_person .dtc {
        display: block;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    .redact_person_img {
        margin-bottom: 20px;
    }
	.comment_avatar {
		display: none;
	}
	.child_comment {
		margin-left: 30px;
	}
	.popup_title {
		font-size: 26px;
	}
	.print_version a:first-child {
		display: block;
		margin-bottom: 10px;
	}
}
@media print,
       (-o-min-device-pixel-ratio: 5/4),
       (-webkit-min-device-pixel-ratio: 1.25),
       (min-resolution: 120dpi) {

}

/* ==========================================================================
   Helper classes
   ========================================================================== */

.hidden {
    display: none !important;
    visibility: hidden;
}

.visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
}

.invisible {
    visibility: hidden;
}

.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}

/* ==========================================================================
   Print styles
   ========================================================================== */

@media print {
    *,
    *:before,
    *:after {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }

    a,
    a:visited {
        text-decoration: underline;
    }

    a[href]:after {
        content: " (" attr(href) ")";
    }

    abbr[title]:after {
        content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
        content: "";
    }

    pre,
    blockquote {
        border: 1px solid #999;
        page-break-inside: avoid;
    }

    thead {
        display: table-header-group;
    }

    tr,
    img {
        page-break-inside: avoid;
    }

    img {
        max-width: 100% !important;
    }

    p,
    h2,
    h3 {
        orphans: 3;
        widows: 3;
    }

    h2,
    h3 {
        page-break-after: avoid;
    }
}

/* ==========================================================================
   Google maps styles
   ========================================================================== */
.map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

/* ==========================================================================
   Lead in article
   ========================================================================== */
#lead{
	font-size: 16px;
}
