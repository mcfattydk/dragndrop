$(function(){ //DOM Ready
 
	$('.l-sortable').sortable({
		opacity: .8

	});
	$('.l-sortable').disableSelection();
	$('.l-sortable').sortable({ placeholder: "border" });
 
});