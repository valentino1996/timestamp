var express = require ("express");
var moment = require ("moment");

var app = express();

app.get("/", function(req, res){
	res.send("put a date as a parameter");
});

app.get("/:date", function(req, res){
	
	var date = req.params.date;
	var a = moment(date);
	var b = a.format('LL');
	var obj = {};
	
	if(isNaN(Number(date))){
		obj = {
			unix : moment(date).unix(),
			natural: b
		};
	}
	else{
	obj = {
		unix: date,
		timestamp: moment.unix(date)
		};
	}
		
	res.json(obj);
});
app.listen(process.env.PORT||8080);