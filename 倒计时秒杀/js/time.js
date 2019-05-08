const http = require("http");

const server = http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")

    const date = new Date();
	// var sre = date.setDate(date.getDate() + 7);
	var sre = "2019/5/10 23:25:40";
	res.end(JSON.stringify(new Date(sre).getTime()))
});

server.listen(8888);