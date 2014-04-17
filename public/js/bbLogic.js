var NoteModel = Backbone.Model.extend({
	defaults: {
		title : name,
		path : '/',
		text : ""
	}
});
var NotesList = Backbone.Collection.extend({
    model: NoteModel
});
var NotesListView = Backbone.View.extend({
	el: "#left-bar",
	templ8: "<% _.each(notesCol, function(note) { \
			<li> <%= note.title %> </li> \
			<% }); %> \
		      \
	",
	initialize: function() {
		_.bindAll(this, 'render', 'toggleDisplayAdd');		
		this.render();
		notesList.add(NotesStorage.notes);
	},
	events: {		
		'click button#add' : 'addItem',
		'click button#addNew' : 'toggleDisplayAdd',
		'click button#go' : 'addNote',
	},
	
	render: function(){		
		var template = _.template	
	},
	
	toggleDisplayAdd: function(){
		$('#addNewCont').toggleClass('no-display');
	},

	addNote: function() {
		//check textbox
		var name = $('#addNewTxt').val();
		if(name == "")
			return;
		//call API to add note
		var tmpNote = NotesStorage.addByTitle(name);
		//update own collection
		notesList.add([tmpNote]);
		//render this view
		this.render();
	},
});


var notesList = new NotesList();
var notesListView = new NotesListView();