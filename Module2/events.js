
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter1 = new MyEmitter();

myEmitter1.on('event', () => {
    console.log('Happy birthday to me');
})

myEmitter1.emit('event');

