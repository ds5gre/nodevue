const express = require('express');
const app = express(),
	testJson = require('./test/test.json');

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
//	res.send("<h1>Hello NodeJS !!</h1>");
//	res.json(testJson);
	res.render('index', {name:'kim'});
});

app.get('/test/:email', (req, res) => {
	testJson.email = req.params.email;
	testJson.aa = req.query.aa;
	res.json(testJson);
});

const server = app.listen(3000, function(){
	console.log("Express's started on port 3000");
});

