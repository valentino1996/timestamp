var express = require ("express");
var moment = require ("moment");

var app = express();

app.get("/", function(req, res){
	res.send("put a date as a parameter");
});

app.get("/:date", function(req, res){
	var date = req.params.date;
	var a = moment(date, moment.ISO_8601);
	var b = a.format('LL');
	if(b=="Invalid date"){
		b = "January 1st 1970";
	}
	var obj = {
		unix: date,
		natural: b};
	res.json(obj);
});
app.listen(process.env.PORT||8080);