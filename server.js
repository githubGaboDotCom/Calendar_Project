var express = require('express');
const app = express();

require('dotenv').config();

const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

//const bcrypt = require("bcrypt");
//const flash = require("express-flash");
//const session = require("express-session");

app.set("port", (process.env.PORT || 3000));

app.use(express.static('public'));

app.get("/loginCredentials/index", getHomePage);
app.get("/loginCredentials/register", getRegister);
app.get("/homePage.html", getLogin);
app.get("/loginCredentials/dashboard", getDashboard);


app.listen(app.get("port"), function(){
	
	console.log("Now listening port: ", app.get("port"));
	
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
/*
app.post("/register", function (req, res) {
	
    var firstName = req.body.firstName;
	if (firstName){
		
		res.render('index');
		
	}
	
	
});
*/
function getHomePage(req, res) {
    	
	res.render("index");
	//console.log("Getting person information");
	//var result = {id: 238, first: "Gabriel", last: "Andres"};
	
	//res.json(result);
}

app.post("/loginCredentials/register", function (req, res) {
    
   let { firstName, lastName, address, city, states, zip, phone, email, pin}
    = req.body; 

    console.log({
		firstName, 
		lastName, 
		address, 
		city, 
		states, 
		zip, 
		phone, 
		email,
		pin
	});	
	
	res.render("index");
	
});

app.post("/loginCredentials/index", function (req, res) {
    
	let { username, password, password2} = req.body; 
    
    let errors = [];
    if(password.length < 6) {
     
	errors.push({ message: "Password should be at least 6 characters" });

    }

    if(password != password2) {
     
	errors.push({ message: "Password do not match" });

    }

	if(password.length > 0) {
     
	res.render("index", { errors });

    } else{
		
		var sql = "SELECT id, username, password FROM loginCredentials WHERE id = $1::init;";
		pool.query(sql, function(err, results) {
			
			if (err) {
					
				throw err;
			}else {
				
				console.log("Back db with: ");
				console.log(results);
			}
			
		}
		
		
		
		);
		
		//var sql = "SELECT iusername FROM loginCredentials";
	/*
		pool.query (
			"SELECT * FROM loginCredentials WHERE username = $1", 
			[username],
			(err, results) => {
				
				if (err) {
					
					throw err;
				}
			console.log(results.rows);
			
			if (results.rows.length > 0) {
				
				errors.push({ message: "Username already registered"});
				res.render("index", { errors });
			}
		  }
		);
		
	}
	console.log({
		username, password, password2
	});	
   */
	//res.render("login");
}
});

function getRegister(req, res) {
    	
	res.render("register");
	
}

function getLogin(req, res) {
    	
	res.render("login");
	
}

function getDashboard(req, res) {
    	
	res.render("dashboard", { user: "Gabriel"});
	
}

