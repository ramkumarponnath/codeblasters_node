var express = require('express');
function start(){
    var app = express();
    app.listen(3000,()=>{
        console.log('Server Started in port 3000');
    });
    /*
    express.listen(function(request,response){
        response.writeHead(200,{"Content-Type":"text/json"});
        response.write("Hello");
        response.end();
    }).listen(8081);
    console.log("Server has started");*/
}
exports.start = start;