const http = require('http');
const express= require('express');
const path=require('path');
const app= express();
const connectDB = require('./DB/Conncection');
const { url }=require('inspector');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDB();
app.use(express.json({ extended: false }));
app.use(express.static("express"));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/express/project.html'));
});
app.post('/contact', require('./Api/contact'));
app.post('/order', require('./Api/order'));
const server=http.createServer(app);
const port=process.env.PORT || 3000;
server.listen(port);
console.debug('server listening on port'+port);