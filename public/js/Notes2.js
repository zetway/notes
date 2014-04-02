var Notes = {	
	add : function(note){
		localStorage.setItem(note.id, note);

		var str = "pathTree"
		var obj = {};
		var dirs = note.path.split("/");
		for (var i = 0; i < dirs.length; i++) {
			str += "[" + dirs[i] + "]";
			obj = eval(str);
			if(obj === undefined){
				d.log(obj);
			}
			else d.log(1);
		};
		var obj = eval(str);
	},
	get : function(id){
		return localStorage.getItem(id)
	},
	update : function(id, note){
		localStorage.setItem(id, note);
	},
	getIds : function(path, recursive){

	},
	
	pathTree : {},

};