$(document).ready(function() {
	$("#selector1").on("hover", function(e){
		$(".parrafo2").toggleClass("red");
	})
	
	$("#selector2").on("hover", function(e){
		$("#ejemplo").toggleClass("red");
	})
	
	$("#selector3").on("hover", function(e){
		$("#ejemplo p").toggleClass("red");
	})
	
	$("#selector4").on("hover", function(e){
		$("#ejemplo > p").toggleClass("red");
	})
	
	$("#selector5").on("hover", function(e){
		$(".cuerpo > p:first").toggleClass("red");
	})
	
	$("#selector6").on("hover", function(e){
		$("#ejemplo div:last h4").toggleClass("red");
	})
	
	$("#selector7").on("hover", function(e){
		$("span#autor").toggleClass("red");
	})
});