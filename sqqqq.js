//Importing modules
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;
const http = require('http');
const path = require("path");
const bodyParser = require('body-parser');

const fs = require("fs");



//let tabObj = [];

// Create a connection to the database
const connection = mysql.createConnection({
host: 'localhost',
password: '9382373682',
user: 'root',
database: "eg01"	
});

// open the MySQL connection
connection.connect(error => {
	if (error){
		console.log("A error has been occurred "
			+ "while connecting to database.");	
		throw error;
	}
	
	connection.query("SELECT * FROM veh", function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
	  });

	//If Everything goes correct, Then start Express Server
	app.listen(PORT, ()=>{
		console.log("Database connection is Ready and "
			+ "Server is Listening on Port ", PORT);
	})
});

//console.log(tabObj);

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'./table_Alter.html'));
	});

	app.post('/', function (req, res) {

		//const { id, brand, model, year, b_pr, s_pr } = req.body;
		//console.log();
		connection.query("SELECT * FROM veh", function (err, result, fields) {
			if (err) throw err;
			//console.log(document.getElementById('id').value);
			res.send("---> ___> "+JSON.stringify(result));
			//console.log(result);
		  });
		 
	});

	 


	app.get('/veh', function (req, res) {

			connection.query("SELECT * FROM veh", function (err, result, fields) {
			if (err) throw err;
			fs.writeFile('getDataFromDb.json', '[', function (err) {
				if (err) throw err;
				console.log('Updated!');
			  });
			//console.log(result[0]);
			for(i in result){
				console.log(result.length);
				if(i<result.length-1){
					fs.appendFile('getDataFromDb.json', JSON.stringify(result[i])+',', function (err) {
						if (err) throw err;
						console.log('Updated!');
					  });
				}
				else{
					fs.appendFile('getDataFromDb.json', JSON.stringify(result[i]), function (err) {
						if (err) throw err;
						console.log('Updated!');
					  });
				}

				  
			}
			fs.appendFile('getDataFromDb.json', ']', function (err) {
				if (err) throw err;
				console.log('Updated!');
			  });
			//console.log(document.getElementById('id').value);
			res.send("---> ___> "+JSON.stringify(result));
			//console.log(result);
		  });
		 
	  }); 



