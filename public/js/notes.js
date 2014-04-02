(function($){
	
	var slct = {
		btn: 'button#submit',
		txt: 'textarea#text'
	};
	

	if (typeof(Storage) == "undefined"){
		$(slct.txt).attr("disabled");
	}

	var note = Notes.get("a1");
	
	if (note){

		$(slct.txt).val(note);
	}
	$(slct.btn).on('click', function(){
		
		localStorage["a1"] = $(slct.txt).val();
		
	});
})($);

