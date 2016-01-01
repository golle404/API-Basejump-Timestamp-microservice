var express = require("express");
var dateFormat = require("dateformat");
var validator = require("validator");

var app = express();


app.get("/:timestamp", function(req, res){

	var p;
	if(validator.isNumeric(req.params.timestamp)){
		p = parseInt(req.params.timestamp) *1000;
	} else{
		p = req.params.timestamp;
	}
	var param = new Date(p);
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