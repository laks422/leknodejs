const myos=require('os');
const myfs=require('fs')
var userdata=myos.userInfo();

var platform=myos.platform();
myfs.appendFile("mydata.text",userdata.username,(error)=>{
    if(error){
        throw error;
        console.log(error);
    }
});