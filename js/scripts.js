$(document).ready(function () {

	// SLIDER ARROWS //

	var counter = 0;
 if (counter === 0) {
	 $(".arrow-r").hide("fast");
 };
	$(".arrow-l i").css("display", "none");
	$(".arrow-l").on({
		mouseenter: function () {
			$(".arrow-l i").fadeIn(500);
		}
		, mouseleave: function () {
			$(".arrow-l i").fadeOut(100);
		}
		, click: function () {
			counter -= 1;
			$(".slider").animate({
				marginLeft: "-=100%"
			}, 500);
			$(".slider .slide:eq(0)").insertAfter($(".slider .slide:eq(3)"));
			if (counter == -3) {
				$(".arrow-l").hide("fast");
			}
			else {
				$(".arrow-l").show("fast");
			};
			if (counter == 0) {
				$(".arrow-r").hide("fast");
			}
			else {
				$(".arrow-r").show("fast");
			};
		}
	, });
	$(".arrow-r i").css("display", "none");
	$(".arrow-r").on({
		mouseenter: function () {
			$(".arrow-r i").fadeIn(500);
		}
		, mouseleave: function () {
			$(".arrow-r i").fadeOut(100);
		}
		, click: function () {
			counter += 1;
			$(".slider").animate({
				marginLeft: "+=100%"
			}, 500);
			if (counter == 0) {
				$(".arrow-r").hide("fast");
			}
			else {
				$(".arrow-r").show("fast");
			};
			if (counter == -3) {
				$(".arrow-l").hide("fast");
			}
			else {
				$(".arrow-l").show("fast");
			};
		}
	, });

	// SLIDER ARROWS //

	// SLIDER DOTS //

	$(".dots :first-child").click(function () {
		$(".slider").animate({
			marginLeft: "0%"
		}, 500);
	});
	$(".dots :nth-child(2)").click(function () {
		$(".slider").animate({
			marginLeft: "-100%"
		}, 500);
	});
	$(".dots :nth-child(3)").click(function () {
		$(".slider").animate({
			marginLeft: "-200%"
		}, 500);
	});
	$(".dots :nth-child(4)").click(function () {
		$(".slider").animate({
			marginLeft: "-300%"
		}, 500);
	});

	// SLIDER'S HEADER FIRST LETTER //

	//	document.write($("span").text());

	// ASIDE ON/OFF //

	$("aside").css("display", "none");
	$("li.hamburger").click(function () {
		$("aside").show("slow");
	});
	$(".slider, .container").click(function () {
		$("aside").css("display", "none");
	});

	// ASIDE ON/OFF //

	// GET JSON //

	var i = 0;
	$.getJSON("https://api.myjson.com/bins/1dk197", function(obj){
		$.each(obj, function(key, value){

			$("div.wrapper").eq(i).prepend("<h2>"+obj[i].title1+"</h2>"+"<h4>"+value.autor+"</h4>"+"<p>"+obj[i].text1+"</p>"+"<button class='read'>"+"Czytaj więcej"+"</button>"+"<button class='readlater'>"+"Dodaj do zakładek"+"</button>");
			i++;
		});
	});

	// GET JSON //

	// LOAD MORE //

$(".loadmore").click(function(){
	$.getJSON("https://api.myjson.com/bins/1dk197", function(obj){
		$.each(obj, function(key, value){
			var j = 0;
			$("div.page").append("<hr>"+"<section class='excerpt'>"+"<div class='wrapper'>"+"<h2>"+obj[j].title1+"</h2>"+"<h4>"+value.autor+"</h4>"+"<p>"+obj[j].text1+"</p>"+"<button class='read'>"+"Czytaj więcej"+"</button>"+"<button class='readlater'>"+"Dodaj do zakładek"+"</button>"+"</div>"+"</section>");
			$(".loadmore2").hide("slow");
			j++;
		});
	});
});

	// LOAD MORE //

	// POST'S LOAD MORE //
	var json = ["https://api.myjson.com/bins/pzp4r", "https://api.myjson.com/bins/17i217"],
	    counter2 = 0;
	$(".loadmore4").click(function(){
		$.getJSON(json[counter2], function(obj2){
			$.each(obj2, function(key, value){
				$("div.page").append("<hr>"+"<section class='excerpt'>"+"<div class='wrapper'>"+"<h2>"+value.title1+"</h2>"+"<h4>"+value.autor+"</h4>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<p>"+obj2[0].art1+"</p>"+"<button class='tag'>"+"pieniądze"+"</button>"+"<button class='tag'>"+"inwestowanie"+"</button>"+"</div>"+"</section>");
				$(".loadmore3").before($("section.excerpt"));
				counter2++;
				if (counter2 === 2) {
					$(".loadmore3").hide("fast");
				}
			});
		});
	});

});
