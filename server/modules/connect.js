const Gate = require('./socket');
const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO.listen(server);
  io.sockets.on('connection', function (socket) {
    console.log('connection works fine');
    const gate = new Gate(socket, io);

    socket.on('client', function(res){
      gate.call[res.method](res.params);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected !!!');
    });

  });

  return io;
};