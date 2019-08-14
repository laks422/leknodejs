var EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.on("doorOpen",()=>{
    consloe.log("ring ring...");
})
emitter.emit("doorOpen");