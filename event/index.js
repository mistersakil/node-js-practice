let EventEmitter = require('events');
let event = new EventEmitter();
console.log(event);
event.on('firstEvent', (code, msg) =>{
  console.log(code + " => "+ msg);
} );

event.emit('firstEvent',200,"success");
