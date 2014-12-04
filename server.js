'use strict';

var express = require('express')
  , faker   = require('faker');

var app = express();

app.use(express.static(__dirname + '/public'));

// serve html with list of endpoints from root
app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/user', function(req, res){
  var user = faker.helpers.createCard();
  res.json(user);
});

app.listen(3000, function(){
  console.log('Listening on localhost:3000...');
});
