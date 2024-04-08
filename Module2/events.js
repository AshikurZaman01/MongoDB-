
const EventEmitter = require('node:events');

class MyBirthDay extends EventEmitter { }

const birthDay1 = new MyBirthDay();

// create event listeners
birthDay1.on('birthDay', () => {
    console.log('Happy Birthday kakku');
})

// emitting an event
birthDay1.emit('birthDay');