"use strict";
var express = require("express");
var PORT = 3000;
var app = express();
const ip = require("ip");
app.get("/getRemoteIp", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ ip: ip.address() });
});
app.get("/", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Helloworld\n");
});
app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
