const methodsPath = './modules/methods';
const methods = {};

const fs = require('fs');
fs.readdir(methodsPath, (err, files) => {
  files.forEach(file => {
    const name = file.split('.js')[0];
    methods[name] = require(`./methods/${file}`);
  });
});

module.exports = methods;


// {
//
//   ...methods,
//
//   // echo,
//   // create,
//
//   /**
//    * Send message to all in room
//    * @param event {string} - event name
//    * @param data {object} - params
//    */
//   all(data){
//     io.sockets.in(socket.room).emit(data.event, data.data);
//   },
//
//   sendMessage(data){
//     io.sockets.in(socket.room).emit(data.event, data.data);
//   },
//
//   systemMessage(data) {
//     console.log('systemMessage');
//     io.sockets.in(socket.room).emit('systemMessage', data.data);
//   },
//
//   /**
//    * Send message to all in room except sender
//    * @param event {string} - event name
//    * @param data {object} - params
//    */
//   broadcast(data){
//     console.log('broadcast');
//     socket.broadcast.to(socket.room).emit(data.event, data.data);
//   },
//   /**
//    * Sending data to a specific user
//    * @param socketId {string}
//    */
//   send(socketId){
//     io.clients[socketId].send();
//   },
//
//   disconnect(){
//     console.log('disconnected');
//   },
//
//   leaveroom(data){
//     socket.leave(socket.room);
//     socket.emit(data.event, data);
//   },
//
//   typing(data){
//     socket.broadcast.to(socket.room).emit('typing', data);
//   },
//
//   like(data){
//     socket.broadcast.to(socket.room).emit('like', data);
//   }
// };