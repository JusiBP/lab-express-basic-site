const express = require("express"); 
const app = express(); 

app.use(express.static("public")) ;

//---------------------------------------------------

app.get("/home", (request, response, next)=>{
    response.sendFile(__dirname + '/views/home.html') //__dirname + 'views/home.html'
})
app.get("/about", (request, response, next)=>{
    response.sendFile(__dirname + '/views/about.html') //__dirname + 'views/about.html'
})
app.get("/work", (request, response, next)=>{
    response.sendFile(__dirname + '/views/work.html') //__dirname + 'views/work.html'
})
app.get("/gallery", (request, response, next)=>{
    response.sendFile(__dirname + '/views/gallery.html') //__dirname + 'views/gallery.html'
})


app.listen(3000, ()=>{
    console.log("escuchando port 3000")
});
