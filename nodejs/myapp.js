const myoss=require('os');
var userdata=myoss.userInfo();
console.log(userdata);
var platform=myos.platform();
console.log(userdata.username +" uses " +platform);