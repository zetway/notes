var NotesCol = Backbone.Collection.extend({
	url: '/noteslist'
});

var NotesList = Backbone.View.extend({
	el: "ul#notes-nav",
	template: " \
		<% _.each(notesCol, function(note) {  %> \
			<li> <%= note.title %></li> \
			<% }); %>		\
	",
	render: function(){
		var that = this;
		var notesCol = new NotesCol();
		notesCol.fetch({
			success: function(notesCol){
				var template = _.template(
					that.template, 
					{notesCol: 
		[{
			id: "01",
			name: "first",
			path: "/",
			title: "first title",
			text: "here is the text of first"
		},
		{
			id: "02",
			name: "third",
			path: "/",
			title: "title of third",
			text: "here is the text of third"
		},
		{
			id: "02",
			name: "third",
			path: "/",
			title: "title of waht",
			text: "here is the text of third"
		}]
	
				});
				that.$el.html(template);
				//that.$el.html("fetch success");
			},
		});
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
Backbone.history.start();