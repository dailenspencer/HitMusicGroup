var express = require('express');
var path = require('path');
app = express();
app.use(express.static(path.join(__dirname,'../public/')));

app.use('/bower_components',  express.static(__dirname + '../public/bower_components'));


app.get('*', function(req,res){
	console.log('__dirname is : ',__dirname)
	res.sendFile(path.join(__dirname,'../public/index.html'));
})

app.set('port', process.env.port || 8083)

var server = app.listen(app.get('port'), function() {
	console.log(process.env.port,"PORTT");
    var host = server.address().address
    var port = server.address().port

    console.log("HitMusicGroup app listening at port", host, port)

})

