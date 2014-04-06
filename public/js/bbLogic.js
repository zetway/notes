var NoteModel = Backbone.Model.extend({
	defaults: {
		id: "0",
		title: "defTitle",
		name: "defName",
		path: "defPath",
		text: "defText"
	}
});

var NotesCol = Backbone.Collection.extend({
	url: '/noteslist',
	model: NoteModel,
});

var NotesListView = Backbone.View.extend({	
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

var notesListView = new NotesListView();

var router = new Router();
router.on('route:home', function(){
	notesListView.render();
});

/*
_.extend(NotesListView, Backbone.Events);
NotesListView.on("noteAdded", function(note) {
  if(note) Notes.getAll();
  
});
*/
Backbone.history.start();