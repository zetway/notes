var Notes =  {	
	collection: [], // i'm not shure if it is supposed to be this way
	ids: [],
	lastId: "0", //temporary
	pathTree : {},
	init: function(){
		this.getIds();
	},
	addFull : function(note){
		if (note.id == null) {
			throw "no note id";
		};
		localStorage.setItem(note.id, note);
		
		/* !!! temporary !!!  */
		this.ids = [];

		this.ids.push(note.id);
		localStorage.setItem('ids', this.ids);
		/*
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
		*/
	},

	addByName: function(name){
		
		this.lastId++;
		this.addFull(new Note(this.lastId, name, "null", "null", "null", "null"));
		
	},
	get : function(id){
		return localStorage.getItem(id)
	},
	update : function(id, note){
		localStorage.setItem(id, note);
	},
	getAll: function(){
		for(id in this.ids){
			this.collection.push(this.get(id));
		}
		return this.collection;
	},
	getIds : function(){
		this.ids = localStorage.getItem("ids") || [];
	},
	

};
Notes.init();