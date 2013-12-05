var fieldsize=0;
$('#single-line').click(function(event){
	$('#field-insert').html("<input type='text' ><br>");
	event.preventDefault();
} );

$('#paragraph-text').click(function(event){
	$('#field-insert').html("<textarea type='textarea' ></textarea><br>");
	event.preventDefault();

});
$('.addradio').click(function(){
	$(".addfield").html("<p>just checking again</p>")
} );
$('#radiobutton').click(function(event){
	event.preventDefault();
	fieldsize=0;
	fieldsize++;
	$('#field-insert').html("<input type='text' class='radiobutton' placeholder='enter value of radio button'><br><button type='button' class='btn btn-default addradio'>add another radio button option</button><div class='addfield'></div>");

} );

jQuery(function() {
	$("#check1").click(function(){
		$.getScript("/item_type?user=1");
	});
	$("#check2").click(function(){
		$.getScript("/item_type?user=1");
	});
	$("#check3").click(function(){
		$.getScript("/item_type?user=1");
	});
	$("#check4").click(function(){
		$.getScript("/dashboard/ajax_handler?user=4");
	});	
});