var express = require('express');
var path = require('path');
app = express();
app.use(express.static(path.join(__dirname,'../public/')));

app.use('/bower_components',  express.static(__dirname + '../public/bower_components'));


app.get('*', function(req,res){
	console.log('__dirname is : ',__dirname)
	res.sendFile(path.join(__dirname,'../public/index.html'));
})

var server = app.listen(8083, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})

