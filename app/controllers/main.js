module.exports = function (app) {
  var five = require("johnny-five"),
  board, button, led;

  const mailer = app.helper.mailer,
  mqtt = app.helper.mqtt;

 board = new five.Board({'port': 'COM4'});

  board.on("ready", function() {

    button = new five.Button(2);
    led = new five.Led(13);

    board.repl.inject({
      button: button
    });

    // "down" the button is pressed
    button.on("down", function() {
      mqtt.publish('app iniciado');
      
      led.toggle();
      mailer.main();
    });

  });
}