
/**
 * reading the Json File
 */

let dataobbj = {};

 const rd = require("fs");


 // read the file
function readjs(filePath, cb) {

/**
 * 1st Argument is file path
 * 2nd one is file encoding 
 * 3rd one is call back function
 */
  rd.readFile(filePath, (err, data) => {
    if (err) {
      return cb && cb(err);
    }
    try {

      const obb = JSON.parse(data);
      return cb && cb(null, obb);

    } catch (err) {
      return cb && cb(err);
    }
  });
}

// call the function to read the file

readjs("./eg.json", (err, myobb) => {
  if (err) {
    console.log(err);
    return;
  }
  dataobbj = myobb;
  console.log(myobb); 
});


/***
 * update the json file change the brand to "abc"
 */
function updater(filePath, objfl){

        // increase customer order count by 1
        //objfl.price += 100000;
        rd.writeFile(filePath, JSON.stringify(objfl), err => {
          if (err) console.log("Error writing file:", err);
        });
}


/* updater("./userInfo.json"); */

/**
 * express JS 
 */

/**
 * creating a local server using express js
 */



// Require express and create an instance of it


const express = require('express');
const http = require('http');
//const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
//const users = require('./data').userDB;



const app = express();
const server = http.createServer(app);


/* // on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    //res.send('Landing page');
    res.sendFile(path.join(__dirname,'./frm.html'));
});
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./')));

app.use(express.json()); // Used to parse JSON bodies
//app.use(express.urlencoded()); //Parse URL-encoded bodies


app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./frm.html'));
  });


  app.post('/', function (req, res) {
    const { username, password } = req.body;
  res.send("Welcome "+JSON.stringify(req.body.fname));
  updater("./userInfo.json", req.body);

});


app.get('/usedVeh', function (req, res) {
  res.send("sorry for the inconvenience :-(, site will be up and running soon :-)");

}); 



// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});




/*

const rdd = require('fs');

rdd.readFile('./eg.json', 'utf-8', (err, data)=>{
    //console.log(data);
    if(err){
        console.log(err);
    }
    else{
        // The "data" that is receiveed is string- convert that to js object
        try{
            const obdata = JSON.parse(data);
            console.log(obdata.price);
        }
        catch(err){
            console.log("error when parsing the json file\n"+err);
        }

    }
}); */



