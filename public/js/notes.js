var NotesStorage =  {	
	notes: [], 	
	lastId: 0,
	init: function(){
		this.lastId = localStorage.getItem("lastId");
		this.notes = localStorage.getItem("notes") || [];
	},
	addByTitle: function(title){
		
		this.lastId++;
		var newNote = {
			id: this.lastId, 
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
		localStorage.setItem(String(note.id), note)
	},
	persistNotes: function(){
		localStorage.setItem("notes", this.notes)
	},
	get: function(id){
		return localStorage.getItem(id);
	},
};
NotesStorage.init();