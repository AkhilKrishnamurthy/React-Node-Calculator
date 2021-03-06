//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');

//use cors to allow cross origin resource sharinggg
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret              : 'cmpe273_kafka_passport_mongo',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

app.use(bodyParser.json());

//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
var output;

app.post('/calcHome',function(req,res){
            console.log("data is", req.body);
            var input = req.body;
             output = eval(req.body.inputNumber);
            // console.log("Output of the evaluation is",output);
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
             res.end("Successful post");
});

app.get('/calcHome', function(req,res){
    console.log("Output of the evaluation is", output);    
    res.writeHead(200,{
        'Content-Type' : 'application/json'
    });
     res.end(JSON.stringify(output));
    
})
app.listen(3001);
console.log("Server Listening on port 3001");