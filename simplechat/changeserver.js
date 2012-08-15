var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , hookio = require('hook.io')

app.listen(8080);

var hookB = hookio.createHook({
  name: "sqlcdcclient"
});

hookB.on('data', function(data){
  // outputs b::sup::dog
  console.log(this.event + ' ' + data);
  socket.broadcast.emit('moviedataevent', data);
});

hookB.start();

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  
  socket.on('chatevent', function (data) {
    	socket.broadcast.emit('chatevent', data);
  });
});
