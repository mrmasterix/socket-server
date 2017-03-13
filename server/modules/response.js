/**
 *
 * @param type {string} - event name
 * @param status {string} - response status
 * @param params {object} - response params
 */

module.exports = (type, status, params) => {
  const data = {};
  data.result = 'ok';
  data.error = null;
  data.id = socket.client.conn.id;
  data.params = params || null;

  if(status == 'error'){}
  socket.emit(type, data);
};