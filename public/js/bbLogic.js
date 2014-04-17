var NoteModel = Backbone.Model.extend({
	defaults: {
		title : 'name',
		path : '/',
		text : ''
	}
});
var NotesList = Backbone.Collection.extend({
    model: NoteModel
});
var NotesListView = Backbone.View.extend({
	el: "#left-bar",
	listEl: 'ul#notes-nav',
	templ8: "<% _.each(notesCol, function(note) { %> \
			<li id='<%=note.get('id')%>'> <%= note.get('title') %> </li> \
			<% }); %> \
		      \
	",
	currentNote: undefined,

	initialize: function() {
		_.bindAll(this, 'render', 'toggleDisplayAdd');		
		notesList.add(NotesStorage.notes);
		this.render();
	},
	events: {		
		'click button#add' : 'addItem',
		'click button#addNew' : 'toggleDisplayAdd',
		'click button#go' : 'addNote',
		'click ul#notes-nav li' : 'showNote',
		'click button#save' : 'saveNote',
	},
	
	render: function(){		
		//console.log(notesList.models);
		var template = _.template(this.templ8, {notesCol: notesList.models});
		if (!template) { return; }
		$(this.listEl).html(template);
	},
	
	toggleDisplayAdd: function(){
		$('#addNewCont').toggleClass('no-display');
	},

	addNote: function() {		
		var name = $('#addNewTxt').val();
		if(name == "")
			return;		
		var tmpNote = NotesStorage.addByTitle(name);
		
		notesList.add([tmpNote]);		
		this.render();
	},
	showNote: function(evt) {
		
		var id = evt.toElement.id;
		this.currentNote = id;
		var note = NotesStorage.get(id);
		$('.title').html(note.title);
		console.log(note.text);
		$('#text').val(note.text);
	},
	saveNote: function(){
		var text = $('#text').val();
		NotesStorage.update(id, text);
	}
});


var notesList = new NotesList();
var notesListView = new NotesListView();
