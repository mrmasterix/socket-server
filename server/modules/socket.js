/**
 *
 * @param socket
 * @param io
 * @returns {{emit: Function, call: {echo: Function, broadcast: Function}}}
 * @constructor
 */

const response = require('./response');
const methods = require('./methods');

const Gate = function(socket, io) {

  return {

    emit: function(data){
      response('server', 'ok', data);
    },

    /**
     * all for events
     */
    call: methods
  }
};

module.exports = Gate;