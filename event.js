var EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.on("doorOpen",()=>{
    console.log("ring ring...");
})
emitter.emit("doorOpen");