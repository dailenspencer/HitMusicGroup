var express = require('express');
var path = require('path');
app = express();
app.use(express.static(path.join(__dirname,'../public/')));



app.get('*', function(req,res){
	console.log('__dirname is : ',__dirname)
	res.sendFile(path.join(__dirname,'../public/index.html'));
})


var server = app.listen(process.env.PORT || 8083, function() {
	console.log(process.env.port,"PORTT");
    var port = server.address().port

    console.log("HitMusicGroup app listening at port", port)

})

