const express = require("express");

const app = express();

app.use('/css', express.static(__dirname+'/css'));
app.use('/js', express.static(__dirname+'/js'));
app.use('/src', express.static(__dirname+'/src'));

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/algolizer", (req,res)=>{
    res.sendFile(__dirname+"/src/algolizer.html");
});

