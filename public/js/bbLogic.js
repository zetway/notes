var NoteModel = Backbone.Model.extend({
	defaults: {		
		title: "defTitle",
	}
});

var NotesCol = Backbone.Collection.extend({

	initialize: function(){
		this.models = NotesStorage.notes;		
	},
	model: NoteModel,
});

notesCol = new NotesCol();

var NotesListView = Backbone.View.extend({
	events : {
		'click button' : 'showNote'
	},
	el: $("ul#notes-nav"),
	render: function(){		
		var template = $("#notes-list-tpl").html();		
		html = _.template(template, {notesCol: this.model});
		this.$el.html(html);
		console.log(2);
	},
	showNote: function(){
		console.log("1");
	},
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
	}
});

var notesListView = new NotesListView({model: notesCol});

var router = new Router();
router.on('route:home', function(){
	notesListView.render();
});


Backbone.history.start();