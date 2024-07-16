const fs = require("fs");

fs.writeFile("hey.txt", "hey there!", function(err){
    if(err)  console.log(err);
    else console.log("done");
})
fs.appendFile("hey.txt", " how is everything", function(err){
    if(err)  console.log(err);
    else console.log("done");
})

fs.rename("hey.txt", "hello.txt", function(err){
    if(err)  console.log(err);
    else console.log("done");
})

fs.copyFile("hello.txt", "./hola/copy.txt", function(err){
    if(err)  console.log(err);
    else console.log("done");
})

fs.unlink("hello.txt", function(err){
    if(err)  console.log(err);
    else console.log("done");
})


fs.rm("./hola", function(err){
    if(err)  console.log(err);
    else console.log("done");
})

const http = require("http");

const server= http.createServer(function(req, res){
    res.end("hello world");
})


server.listen(3000);
