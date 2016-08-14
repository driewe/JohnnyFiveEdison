// Plug the sound sensor into the Analog port A1 on the provided
// Seeed Sensor Kit Arduino Shield
// MUST be in the analog pin slots!
// Plug the Led component into the D7 slot
var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
    io: new Edison()
});

board.on("ready", function() {
    var sound = new five.Sensor("A1");
    var led = new five.Led(7);

    this.loop(1, function() {
        if (sound.value > 400) {
            led.on();
        }
        led.off();
    });
});
