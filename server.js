const path=require('path');
var express=require('express');
const hbs = require('hbs');

var app = express();
const port=process.env.PORT || 3000;
//const pubpath=path.join(__dirname,'./public');
const path1=path.join(__dirname,'./template/views');
const path2=path.join(__dirname,'./template/partials');



app.set('view engine', 'hbs');

app.set('views',path1);

hbs.registerPartials(path2);

//app.use(express.static(pubpath));

app.get('',(req,res) =>{
	res.render('home');
});

app.get('/initiate',(req,res) =>{
	res.render('initiate');
});

app.get('/confirm',(req,res) =>{
	res.render('confirm');
});

app.get('/update',(req,res) =>{
	res.render('update');
});

app.get('/cancel',(req,res) =>{
	res.render('cancel');
});

app.get('*',(req,res) =>{
	res.send('No such page available');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
