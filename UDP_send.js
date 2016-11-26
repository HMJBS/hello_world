var dgram = require('dgram');
var messege = new Buffer("This is another successful procedure");
var client = dgram.createSocket("udp4");
client.send(messege,0,messege.length,4000,"192.168.11.23",
    function(err){
        client.close();
    }
);

//What the fuck this is too difficult.
//?
//YOU ARE ENGLISH WITH SKIRT
