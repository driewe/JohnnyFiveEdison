/*
 * 74HC595
 * Data IC pin 14 to arduino pin 2
 * Latch IC pin 12 to arduino pin 4
 * Clock IC pin 11 to arduino pin 3
*/

var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
    io: new Edison()
});

board.on("ready", () => {
    var register = new five.ShiftRegister({
        pins: {
            clock: 3,
            data: 2,
            latch: 4,
        }
    });

    var output = 0b10000000;

    board.loop(200, () => {
        output = output > 0 ? output >> 1 : 0b10000000;
        register.send(output);
    });
});
