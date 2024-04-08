
const Events = require('node:events');

class myEvents extends Events { }

const myEmitter = new myEvents();

myEmitter.on('day', () => {
    console.log('It is a my birthday');
})

myEmitter.on('day', (gift) => {
    console.log(`I will send a gift ${gift}`);
})



myEmitter.emit('day', 'bike');

