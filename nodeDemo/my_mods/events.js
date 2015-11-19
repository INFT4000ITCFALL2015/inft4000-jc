/**
 * Created by inet2005 on 11/19/15.
 */
var EventEmitter = require('events');

module.exports = new EventEmitter();

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(function() {
    module.exports.emit('ready');
}, 1000);