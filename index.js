const express = require('express'), 
      app = express();

const Pool = require('./pool'),
	  Mydb = require('./mydb');

const testJson = require('./test/test.json');

const pool = new Pool();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.get('/', (req, res) => {
// //	res.send("<h1>Hello NodeJS !!</h1>");
// //	res.json(testJson);
// 	res.render('index', {name:'kim'});
// });

app.get('/test/:email', (req, res) => {
	testJson.email = req.params.email;
	testJson.aa = req.query.aa;
	res.json(testJson);
});

app.get('/dbtest/:user', (req, res) => {
	let user = req.params.user;
	// console.log(req.params);
	let mydb = new Mydb(pool);
	mydb.execute( conn =>{
		conn.query("select * from user where user=?", [user], (err, ret) => {
			res.json(ret);
		})
	})
});

const server = app.listen(3000, function(){
	console.log("Express's started on port 3000");
});

