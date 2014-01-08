var express = require("express");
var app = express();

app.configure(function () {
   app.use(express.static(__dirname + '/app'));
});

app.use(express.logger());


app.get('/', function(req, res){
       res.send("index.html");
});

app.get('/*', function(req, res){
  //respond with 404 page or something.
  res.status(404).sendfile('/app/404.html');  
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
