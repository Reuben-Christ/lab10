const fs = require("fs");
const { callbackify } = require("util");

// Read users.json file
fs.readFile("movie.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const movies = JSON.parse(data);

    console.log(movies); // Print users
});

var newMovieDetails = {
    "id":11,
     "name":"Drishyam", 
     "language":"Malayalam",
     "price":200, 
     "releasedate":"21/2/19"
}



fs.writeFile("newmovie.json",JSON.stringify(newMovieDetails,null,2),err=>{
    if(err) throw err;
    console.log("File written sucessfully!");
})

//routing feature
var http = require('http');
  
// Create a server object
http.createServer(function (req, res) {
      
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'}); 
      
    var url = req.url;
      
    if(url ==='/about') {
        res.write('We are a world class theatre now open at your city. Hope you our enjoying our services. Currently operating at Koramangala,Electronic city,BTM layout,etc'); 
        res.end(); 
    }
    else if(url ==='/contact') {
        res.write('Hello welcome to Movies Hub!! Hope your liking the experience!! Do let us know if anything is needed to improve. Call us at 9823080266 or email us at info@movieshub.com'); 
        res.end(); 
    }
    else {
        res.write('Welcome to the about page of Movies Hub. Here we help you book your favourite movies at your convinience!!!'); 
        res.end(); 
    }
}).listen(3000, function() {
      
    // The server object listens on port 3000
    console.log("Server started at port 3000");
});