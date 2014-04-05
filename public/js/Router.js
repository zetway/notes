var NotesCol = Backbone.Collection.extend({
	url: '/noteslist'
});

var NotesList = Backbone.View.extend({
	initialize: function(){
		this.on('noteAdded', this.noteAdded, this);
	},
	noteAdded: function(model, options){
		console.log("in NotesList, noteAdded");
	},
	el: "ul#notes-nav",

	template: " \
		<% _.each(notesCol, function(note) {  %> \
			<li> <%= note.title %></li> \
			<% }); %> \
	",
	getNotes: function(){
		this.notes = Notes.getAll();
	},
	render: function(){
		
		this.notes = [{title:"bla"}];
		
		var template = _.template(
			this.template, 
			{
				notesCol: this.notes
			}
		);
		this.$el.html(template);
		//that.$el.html("fetch success");
			
		
	},
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
	}
});

var notesList = new NotesList();

var router = new Router();
router.on('route:home', function(){
	notesList.render();
});


_.extend(NotesList, Backbone.Events);
NotesList.on("noteAdded", function() {
  console.log('handling');
});

Backbone.history.start();