var slct = {
	btn: 'button#submit',
	txt: 'textarea#text'
};


var note = Notes.get("a1");

if (note){

	$(slct.txt).val(note);
}
$(slct.btn).on('click', function(){
	
	localStorage["a1"] = $(slct.txt).val();
	
});

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
	Notes.addByName(val);
	NotesList.trigger('noteAdded', val);
});

