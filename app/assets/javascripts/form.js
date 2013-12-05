

jQuery(function() {
	$("#single-line").click(function(event){
		event.preventDefault();
		$.getScript("/items/item_type?type=1");
	});
	$("#paragraph-text").click(function(event){
		event.preventDefault();
		$.getScript("/items/item_type?type=2");
	});
	$("#radiobutton").click(function(event){
		event.preventDefault();
		$.getScript("/items/item_type?type=3");
	});	

});

$('.btn-primary').click(function(event){
	event.preventDefault();
	var a=$('.radios').length;
	$.getScript("/items/item_type?type=9&count="+a);
});