var express = require ("express");
var moment = require ("moment");

var app = express();

app.get("/", function(req, res){
	res.send("put a date as a parameter");
});

app.get("/:date", function(req, res){
	var date = req.params.date;
	var a = moment(date);
	var obj = {
		unix: date,
		natural: a.format('MMMM Do YYYY')};
	res.json(obj);
});
app.listen(process.env.PORT||8080);