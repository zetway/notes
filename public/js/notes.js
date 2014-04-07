function Note(id, name, path, title, text, storage){
	this.id = id;
	this.name = name;	
	this.path = path;
	this.title = title;
	this.text = text;	
}

var NotesStorage =  {	
	notes: [], 	
	lastId: 0,
	init: function(){
		this.lastId = localStorage.getItem("lastId");
		this.notes = localStorage.getItem("notes") || [];
	},
	addByName: function(name){
		
		this.lastId++;
		var newNote = new Note(this.lastId, name, "null", "null", "null", "null");
		this.addNote(newNote);		
		return newNote;
	},
	addNote : function(note){
		var noteNoText = note;
		noteNoText.text = "";
		this.notes.push(noteNoText);
		//console.log("inside NotesStorage addNote, setting this note");
		//console.log(note);
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