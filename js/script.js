$(function(){ //DOM Ready

	$("#items").sortable({
            placeholder: 'highlight',
            revert: true,
            opacity: .8,
            items: 'li:not(.l-dontmove)',
            start: function (event, ui) {
                    ui.item.toggleClass('highlight');
            },
            stop: function (event, ui) {
                    ui.item.toggleClass('highlight');
            }
    });
    $("#items").disableSelection();
});