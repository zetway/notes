var d = {
		enabled : true,
		log : function(arg){
			if (arg == 0) { console.log("OK"); return;}
			if (arg == 1) { console.log("BAD"); return;}
			if (this.enabled)
				console.log(arg);
		}
	};