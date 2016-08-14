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
var bitPattern = [128,64,32,16,8,4,2,1,]
board.on("ready", () => {
    var register = new five.ShiftRegister({
        pins: {
            clock: 3,
            data: 2,
            latch: 4,
        }
    });

    var index = 0
    var increment = 1
// main loop
    board.loop(50, () => {
        register.send(bitPattern[index])
        index += increment
        if (index === 7 || index === 0) {
            increment *= -1
        };
    });
});
