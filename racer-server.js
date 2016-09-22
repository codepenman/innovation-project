var fs = require('fs');
var http = require('http');
var express = require('express');
var handlebars = require('handlebars');
var racerBrowserChannel = require('racer-browserchannel');
var racer = require('racer');
var socket_io    = require( "socket.io" );
var bot = require('./js/bot');

racer.use(require('racer-bundle'));
// Put this statement near the top of your module
var bodyParser = require('body-parser');

var backend = racer.createBackend();

app = express();
app
  .use(racerBrowserChannel(backend))
  .use(backend.modelMiddleware());

// Put these statements before you define any routes.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Socket.io
var io           = socket_io();
app.io           = io;

// socket.io events
io.on("connection", function(socket)
{
  console.log("Connection from Socket Id " + socket.id);
  bot.findOrCreateSession(socket.id, socket);
  socket.on('chat', function (data) {
    console.log("Server - " + data);
    console.log("Chat From Socket Id " + socket.id);
    bot.handleMessage(socket.id, data);
  });
});

app.use(function(err, req, res, next) {
  console.error(err.stack || (new Error(err)).stack);
  res.send(500, 'Something broke!');
});

function scriptBundle(cb) {
  // Use Browserify to generate a script file containing all of the client-side
  // scripts, Racer, and BrowserChannel
  console.log(__dirname);
  backend.bundle(__dirname + '/js/client.js', function(err, js) {
    if (err) return cb(err);
    cb(null, js);
  });
}
// Immediately cache the result of the bundling in production mode, which is
// deteremined by the NODE_ENV environment variable. In development, the bundle
// will be recreated on every page refresh
if (racer.util.isProduction) {
  scriptBundle(function(err, js) {
    if (err) return;
    scriptBundle = function(cb) {
      cb(null, js);
    };
  });
}

app.get('/racer-client.js', function(req, res, next) {
  scriptBundle(function(err, js) {
    if (err) return next(err);
    res.type('js');
    res.send(js);
  });
});

app.get('/nicEdit.js', function(req, res, next) {
  backend.bundle(__dirname + '/js/nicEdit.js', function(err, js) {
    if (err) return next(err);
    res.type('js');
    res.send(js);
  });
});

app.get('/style.css', function(req, res, next) {
  fs.readFile(__dirname + '/style.css', function (err, data) {
    if (err) return send404(res);
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(data, 'utf-8');
    res.end();
  });
});

app.get('/underscore-min.js', function(req, res, next) {
  fs.readFile(__dirname + '/underscore-min.js', function (err, data) {
    if (err) return send404(res);
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(data, 'utf-8');
    res.end();
  });
});

app.get('/bot.png', function(req, res, next) {
  var img = fs.readFileSync(__dirname + '/media/bot.png');
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(img, 'binary');
});

app.get('/user.png', function(req, res, next) {
    var img = fs.readFileSync(__dirname + '/media/user.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
});

var indexTemplate = fs.readFileSync(__dirname + '/index.handlebars', 'utf-8');
var renderIndex = handlebars.compile(indexTemplate);
var scriptsTemplate = fs.readFileSync(__dirname + '/scripts.handlebars', 'utf-8');
var renderScripts = handlebars.compile(scriptsTemplate);
var modelTemplate = fs.readFileSync(__dirname + '/model.handlebars', 'utf-8');
var renderModel = handlebars.compile(modelTemplate);

app.post('/:roomId/clauseAdded', function(req, res, next) {
  var socket = "/#" + req.body.socketId;
  var clause_number = req.body.clause_number;
  var model = req.body.model;
  var message = "Clause " + clause_number + " is added.";

  console.log(socket);
  console.log(clause_number);
  console.log(model.clauses);
  bot.initiateInteraction(socket, message, model.clauses);

  // var model = req.model;
  // var $room = model.at('rooms.' + req.params.roomId);
  // model.ref('_page.room', $room.at('content'));
  // var content = $room.at('content');
  // console.log('Content: ');
  // console.log($room.get('content'));
  // console.log("*****")
  // console.log(model.get());
  // console.log("Clause Number: " + req.body.clause_number);
  // $room.subscribe(function (err) {
  //   if (err) return next(err);
  //   var room = $room.get();
  //
  //   // Reference the current room's content for ease of use
  //   model.ref('_page.room', $room.at('content'));
  //   console.log('Content Inside Subscribe: ');
  //   console.log($room.get('content'));
  //   console.log("**************")
  //   console.log(model.get());
  // });
});

app.get('/home/model/:roomId', function (req, res, next) {
  var model = req.model;
  // Only handle URLs that use alphanumberic characters, underscores, and dashes
  if (!/^[a-zA-Z0-9_-]+$/.test(req.params.roomId)) return next();
  // Prevent the browser from storing the HTML response in its back cache, since
  // that will cause it to render with the data from the initial load first
  res.setHeader('Cache-Control', 'no-store');
  var $room = model.at('rooms.' + req.params.roomId);
  $room.subscribe(function (err) {
    // If the room doesn't exist yet, we need to create it
    $room.createNull({content: ''});
    console.log("Room with model created...");
    // Reference the current room's content for ease of use
    model.ref('_page.room', $room.at('content'));

    var html = '';
    model.bundle(function (err, bundle) {
      if (err) return next(err);
      var bundleJson = stringifyBundle(bundle);
      html += renderModel({bundle: bundleJson});
      console.log("html after bundling: " + html);
      res.send(html);
    });
  });
});

app.get('/:roomId', function(req, res, next) {
  var model = req.model;
  // Only handle URLs that use alphanumberic characters, underscores, and dashes
  if (!/^[a-zA-Z0-9_-]+$/.test(req.params.roomId)) return next();
  // Prevent the browser from storing the HTML response in its back cache, since
  // that will cause it to render with the data from the initial load first
  res.setHeader('Cache-Control', 'no-store');

  var $room = model.at('rooms.' + req.params.roomId);
  // Subscribe is like a fetch but it also listens for updates
  $room.subscribe(function (err) {
    if (err) return next(err);
    var room = $room.get();
    // If the room doesn't exist yet, we need to create it
    $room.createNull({content: ''});
    console.log("Room Created...")
    // Reference the current room's content for ease of use
    model.ref('_page.room', $room.at('content'));
    var html = renderIndex({
      room: $room.get('id'),
      text: $room.get('content')
    });
    console.log("***");
    console.log("html");
    model.bundle(function(err, bundle) {
      if (err) return next(err);
      var bundleJson = stringifyBundle(bundle);
      html += renderScripts({bundle: bundleJson});
      res.send(html);
    });
  });
});

function stringifyBundle(bundle) {
  return JSON.stringify(bundle)
    // Replace the end tag sequence with an equivalent JSON string to make
    // sure the script is not prematurely closed
    .replace(/<\//g, '<\\/')
    // Replace the start of an HTML comment tag sequence with an equivalent
    // JSON string
    .replace(/<!/g, '<\\u0021');
}

app.get('/', function(req, res) {
  res.redirect('/home');
});

var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port, function() {
  console.log('Go to http://localhost:' + port);
});

io.attach( server );
