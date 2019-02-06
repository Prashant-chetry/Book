const express = require('express');

//dynamic port and a static port
const port = process.env.PORT || 8000;

var app = express();

//for loading the Static file
app.use(express.static(__dirname + '/public'));

// app.get('/about', function(req, res){
//     res.render(__dirname + '/public/home.css');
// });
app.listen(port, ()=>{
    console.log(`Server running ${port}`);
});