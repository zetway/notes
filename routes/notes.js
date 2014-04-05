exports.list = function(req, res){
	var notes = [
		
		{
			id: "01",
			name: "first",
			path: "/",
			title: "second title",
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
			title: "title of third",
			text: "here is the text of third"
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
			title: "title of last",
			text: "here is the text of last"
		},

	];
	var json = JSON.stringify(notes);
	res.send(json);
};