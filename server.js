var express = require("express");

var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ 
    extended: false }))

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access to them 
var routes = require("./controller/todo_controller.js");

app.use("/", routes);
app.use("/today", routes);
app.use("/tomorrow", routes);
app.use("/update", routes);

app.listen(PORT, function() {
    console.log("Listenin on port:%s", PORT);

});