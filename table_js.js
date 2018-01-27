(function ($){
/* Show/hide column Дата открытия*/
$("#cbxOpen").on("click", function(){
		if ($("#cbxOpen").is(":checked")) {
				$("#metroStats thead tr th:nth-child(2)").show(500);
				
				$("#metroStats tbody tr td:nth-child(2)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(2)").show(500);
		} else if (!($("#cbxOpen").is(":checked"))){
				$("#metroStats thead tr th:nth-child(2)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(2)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(2)").hide(500);
		};
});
/* Show/hide column Стоимость проезда*/
$("#cbxPrice").on("click", function(){
		if ($("#cbxPrice").is(":checked")) {
				$("#metroStats thead tr th:nth-child(6)").show(500);
				
				$("#metroStats tbody tr td:nth-child(6)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(6)").show(500);
		} else if (!($("#cbxPrice").is(":checked"))){
				$("#metroStats thead tr th:nth-child(6)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(6)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(6)").hide(500);
		};
});
/* Show/hide column Средне техническая скорость*/
$("#cbxSpeed").on("click", function(){
		if ($("#cbxSpeed").is(":checked")) {
				$("#metroStats thead tr th:nth-child(7)").show(500);
				
				$("#metroStats tbody tr td:nth-child(7)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(7)").show(500);
		} else if (!($("#cbxSpeed").is(":checked"))){
				$("#metroStats thead tr th:nth-child(7)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(7)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(7)").hide(500);
		};
});
/* Show/hide column Минимальный интервал*/
$("#cbxInterval").on("click", function(){
		if ($("#cbxInterval").is(":checked")) {
				$("#metroStats thead tr th:nth-child(8)").show(500);
				
				$("#metroStats tbody tr td:nth-child(8)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(8)").show(500);
		} else if (!($("#cbxInterval").is(":checked"))){
				$("#metroStats thead tr th:nth-child(8)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(8)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(8)").hide(500);
		};
});
/* Show/hide column Плотность метрополитена*/
$("#cbxDencity").on("click", function(){
		if ($("#cbxDencity").is(":checked")) {
				$("#metroStats thead tr th:nth-child(9)").show(500);
				
				$("#metroStats tbody tr td:nth-child(9)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(9)").show(500);
		} else if (!($("#cbxDencity").is(":checked"))){
				$("#metroStats thead tr th:nth-child(9)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(9)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(9)").hide(500);
		};
});
/* Show/hide column Эксплуатационный парк*/
$("#cbxPark").on("click", function(){
		if ($("#cbxPark").is(":checked")) {
				$("#metroStats thead tr th:nth-child(11)").show(500);
				
				$("#metroStats tbody tr td:nth-child(11)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(11)").show(500);
		} else if (!($("#cbxPark").is(":checked"))){
				$("#metroStats thead tr th:nth-child(11)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(11)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(11)").hide(500);
		};
});
/* Show/hide column Кол во эскалаторов*/
$("#cbxEscalators").on("click", function(){
		if ($("#cbxEscalators").is(":checked")) {
				$("#metroStats thead tr th:nth-child(13)").show(500);
				
				$("#metroStats tbody tr td:nth-child(13)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(13)").show(500);
		} else if (!($("#cbxEscalators").is(":checked"))){
				$("#metroStats thead tr th:nth-child(13)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(13)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(13)").hide(500);
		};
});
/* Show/hide column Самая шлубокая станция*/
$("#cbxDeep").on("click", function(){
		if ($("#cbxDeep").is(":checked")) {
				$("#metroStats thead tr th:nth-child(15)").show(500);
				
				$("#metroStats tbody tr td:nth-child(15)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tfoot tr th:nth-child(15)").show(500);
		} else if (!($("#cbxDeep").is(":checked"))){
				$("#metroStats thead tr th:nth-child(15)").hide(500);
				
				$("#metroStats tbody tr td:nth-child(15)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tfoot tr th:nth-child(15)").hide(500);
		};
});
/* Show All columns - Показать все*/
$("#linkShowAll").on("click",function(){
				/* Show all cells of table header*/
				$("#metroStats thead tr th:nth-child(2)").show(500);
				$("#metroStats thead tr th:nth-child(6)").show(500);
				$("#metroStats thead tr th:nth-child(7)").show(500);
				$("#metroStats thead tr th:nth-child(8)").show(500);
				$("#metroStats thead tr th:nth-child(9)").show(500);
				$("#metroStats thead tr th:nth-child(11)").show(500);
				$("#metroStats thead tr th:nth-child(13)").show(500);				
				$("#metroStats thead tr th:nth-child(15)").show(500);

				/* Show all cells of table body*/	
				$("#metroStats tbody tr td:nth-child(2)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(6)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(7)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(8)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(9)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(11)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(13)").each(function (){
					$(this).show(500);
				});
				$("#metroStats tbody tr td:nth-child(15)").each(function (){
					$(this).show(500);
				});

				/* Show all cells of table footer*/	
				$("#metroStats tfoot tr th:nth-child(2)").show(500);
				$("#metroStats tfoot tr th:nth-child(6)").show(500);
				$("#metroStats tfoot tr th:nth-child(7)").show(500);
				$("#metroStats tfoot tr th:nth-child(8)").show(500);
				$("#metroStats tfoot tr th:nth-child(9)").show(500);
				$("#metroStats tfoot tr th:nth-child(11)").show(500);
				$("#metroStats tfoot tr th:nth-child(13)").show(500);
				$("#metroStats tfoot tr th:nth-child(15)").show(500);
});
/* Hide All columns - Скрыть все*/	
$("#linkHideAll").on("click",function(){
				/* Hide all cells of table header*/
				$("#metroStats thead tr th:nth-child(2)").hide(500);
				$("#metroStats thead tr th:nth-child(6)").hide(500);
				$("#metroStats thead tr th:nth-child(7)").hide(500);
				$("#metroStats thead tr th:nth-child(8)").hide(500);
				$("#metroStats thead tr th:nth-child(9)").hide(500);
				$("#metroStats thead tr th:nth-child(11)").hide(500);
				$("#metroStats thead tr th:nth-child(13)").hide(500);				
				$("#metroStats thead tr th:nth-child(15)").hide(500);

				/* Hide all cells of table body*/	
				$("#metroStats tbody tr td:nth-child(2)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(6)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(7)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(8)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(9)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(11)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(13)").each(function (){
					$(this).hide(500);
				});
				$("#metroStats tbody tr td:nth-child(15)").each(function (){
					$(this).hide(500);
				});

				/* Hide all cells of table footer*/	
				$("#metroStats tfoot tr th:nth-child(2)").hide(500);
				$("#metroStats tfoot tr th:nth-child(6)").hide(500);
				$("#metroStats tfoot tr th:nth-child(7)").hide(500);
				$("#metroStats tfoot tr th:nth-child(8)").hide(500);
				$("#metroStats tfoot tr th:nth-child(9)").hide(500);
				$("#metroStats tfoot tr th:nth-child(11)").hide(500);
				$("#metroStats tfoot tr th:nth-child(13)").hide(500);
				$("#metroStats tfoot tr th:nth-child(15)").hide(500);
});	
})(jQuery);