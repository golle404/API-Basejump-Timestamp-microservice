var express = require("express");
var dateFormat = require("dateformat");

var app = express();


app.get("/:timestamp", function(req, res){
	var param = new Date(req.params.timestamp);
	var rsp = {unix:null, natural: null};

	if(param != "Invalid Date"){
		rsp.unix = param.getTime()/1000;
		rsp.natural = dateFormat(param, "mmmm dd, yyyy");
	}

	res.send(JSON.stringify(rsp));
})

var port = process.env.PORT || 3000;
app.listen(port, function(){

	console.log("Listening at port " + port);
})