const express = require("express");
const url = require("url");
const fs = require("fs");

const app = express();

app.get("/", (req, res, next) => {

  let result = [];

  let param = url.parse(req.url, true).query;
  //res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})

  if (process.env.name != undefined && process.env.name != null) {
    console.log("환경변수 name : " + process.env.name);
  }

  if (param != undefined)
    console.log(param.test);

  result.push({
    "name": "ad홍min",
    "age": 30
  });

  if (process.env.name != undefined && process.env.name != null) {
    result.push({
      "name": process.env.name,
      "age": 30
    });
  }

  fs.readFile("./test.txt", (err, data) => {
    // res.write(data);
    // res.write("하이");

    res.json(result);
    res.end();
  });

});

// http://localhost:9999




app.listen(9999, () => {
  console.log("server start");
});