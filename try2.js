const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("movie.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const flights = JSON.parse(data);

    console.log(flights); // Print users
});



var newMovieDetails = {
    "id":11,
     "name":"Drishyam", 
     "language":"Malayalam",
     "price":200, 
     "releasedate":"21/2/19"
}



fs.writeFile("next.json", JSON.stringify(newMovieDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})