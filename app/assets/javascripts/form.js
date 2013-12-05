var fieldsize=0;


$('#paragraph-text').click(function(event){
	$('#field-insert').html("<textarea type='textarea' ></textarea><br>");
	event.preventDefault();

});
$('#radiobutton').click(function(event){
	event.preventDefault();
	fieldsize=0;
	fieldsize++;
	$('#field-insert').html("<input type='text' class='radiobutton' placeholder='enter value of radio button'><br><button type='button' class='btn btn-default addradio'>add another radio button option</button><div class='addfield'></div>");

} );

jQuery(function() {
	$("#single-line").click(function(event){
		event.preventDefault();
		$.getScript("/items/item_type?type=1");
	});
	$("#check2").click(function(){
		$.getScript("/item/item_type?user=1");
	});
	$("#check3").click(function(){
		$.getScript("/item/item_type?user=1");
	});
	$("#check4").click(function(){
		$.getScript("/item/item_type?user=4");
	});	
});