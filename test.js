var DMX = require('dmx')
var A = DMX.Animation

var dmx = new DMX()

var universe = dmx.addUniverse('demo', 'enttec-usb-dmx-pro', '/dev/ttyUSB0')


var i = 120;

function spotSpeaker() {
    universe.update({
	9 : 240, // rotate y
	10: 230, // rotate z
	11 : 250, // intensity
	12: 0, // red
	13 : 0, // green
	14 : 0, // blue
	15: 250 // white
    })
}

function aggressive() {
    console.log('Start' );
    
    var anim = new A()   
	.add({
	    0 : 255, // rotate y
	    1: 255
	}, 10000)
	.delay(000)
	.add({
	    0 : 0,
	    1 : 0
	}, 0)
    
    anim.run(universe, function() {
	console.log(' Done' );
	aggressive();
    });    
}


//spotSpeaker()
aggressive()

return;

function animate() {
    var anim = new A()
	.add({
	    9 : 243, // rotate y
	    10: 230, // rotate z
	    11 : 250, // intensity
	    12: 0, // red
	    13 : 0, // green
	    14 : 0, // blue
	    15: 250 // white
	}, 1000)
	.delay(3000)
	.add({
	    9 : 243, // rotate y
	    10: 230, // rotate z
	    11 : 250, // intensity
	    12: 0, // red
	    13 : 0, // green
	    14 : 0, // blue
	    15: 250 // white
	}, 1000)

    anim.run(universe);
}

//animate();


