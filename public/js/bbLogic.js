var NotesListView = Backbone.View.extend({
	events: {
		'click #go' : 'render',
		'click #addNew' : 'render',
	},
	el: "ul#notes-nav",
	render: function(){		
		console.log("1");
	}
	
});

var notesListView = new NotesListView();

