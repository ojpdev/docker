const express = require("express");
const url = require("url");
const fs = require("fs");

const app = express();

app.get("/",(req,res,next) =>{


    let param = url.parse(req.url,true).query;
    //res.writeHead(200,{"Content-type":"char=euckr"})
    
    console.log(param.test);

    fs.readFile("./test.txt",(err,data) => {
      res.write(data);
      res.write("하이");
      res.end();
    });

});



app.listen(9999,()=>{
  console.log("server start");
});