const http=require('http');
const fs=require('fs');
const port=3000;
var path =require('path');

const server=http.createServer(function(req,res){

    if(req.url==="/"){
        fs.readFile('index.html','UTF-8',function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data);
        });
    }
    else if(req.url==="/style.css"){
        var cssPath=path.join(__dirname,"",req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url==="/script.js"){
        var scriptPath=path.join(__dirname,"",req.url);
        var fileStream = fs.createReadStream(scriptPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fileStream.pipe(res);
    }
    else if(req.url==="/horizontal.png"){
        var imagePath=path.join(__dirname,"",req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
});


server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error);
    }
    else{
        console.log('Server is listening on port'+port);
    }
})