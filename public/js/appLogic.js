$('#addNew').on('click', function(){
	$('#addNewCont').toggleClass('no-display');
	var vals = "+-";
	var index = vals.indexOf($(this).html());
	index = index === 0 ? 1 : 0;
	$(this).html(vals[index]);
});
$('#go').on('click', function(){
	var val = $('#addNewTxt').val();
	if (val === "")
		return;
	var id = NotesStorage.addByName(val);
	
});

