
const express = require('express');
const config = require('./config');
const appIndex = require('../app.js');

const app = express();

app.use('/doc', function(req, res, next){
	res.end('Documentation: expressjs.com');
});

app.use('/test', function(req, res, next){
 res.end(` <html>
      <body>
       <h1>Test </h1>
       <img src="http://placekitten.com/g/200/300" alt="picture" >
     </body>
   </html>`);
});


app.use(function(req, res, next) {
  res.send(appIndex);
});

app.use(function(err, req, res, next){
    res.status(404).end('nothing here');
});

app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
