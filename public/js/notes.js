var NotesStorage =  {	
	notes: [], 	
	lastId: 0,
	init: function(){
		this.lastId = localStorage.getItem("lastId") || 0;
		this.notes = JSON.parse(localStorage.getItem("notes")) || [];
	},
	addByTitle: function(title){
		
		this.lastId++;
		var newNote = {
			id: "nt" + this.lastId,
			title: title,
			text: "",
			path: "/"			
		};
		this.addNote(newNote);		
		return newNote;
	},
	addNote : function(note){
		var noteNoText = note;
		noteNoText.text = "";
		this.notes.push(noteNoText);
		localStorage["notes"] = JSON.stringify(this.notes);
		localStorage[note.id] = JSON.stringify(note);
	},
	persistNotes: function(){
		localStorage['notes'] = JSON.stringify(this.notes);
	},
	get: function(id){
		return JSON.parse(localStorage[id]);
	},
	update: function(noteId, noteText)
	{
		var note = this.get(noteId);
		note.text = noteText;
		localStorage[noteId] = note;
	}
};
NotesStorage.init();