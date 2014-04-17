var NotesStorage =  {	
	notes: [], 	
	lastId: 0,
	init: function(){		
		this.lastId = localStorage['lastId'] || 0;
		this.notes = JSON.parse(localStorage.getItem("notes")) || [];
	},
	
	add : function(note){
		
		this.lastId++;
		note.id = 'nt' + this.lastId;
		var noteNoText = note;
		//noteNoText.text = "";
		this.notes.push(noteNoText);
		localStorage["notes"] = JSON.stringify(this.notes);
		localStorage[note.id] = JSON.stringify(note);
		return note;
	},
	persistNotes: function(){
		localStorage['notes'] = JSON.stringify(this.notes);
	},
	get: function(id){
		console.log(id);
		console.log(localStorage[id]);
		var note = JSON.parse(localStorage[id]);
		
		return note;
	},
	update: function(noteId, noteText)
	{
		var note = this.get(noteId);
		note.text = noteText;
		localStorage[noteId] = JSON.stringify(note);
	}
};
NotesStorage.init();