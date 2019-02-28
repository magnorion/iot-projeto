module.exports = function (app) {
  var five = require("johnny-five"),
  board, button;

  const mailer = app.helper.mailer,
  mqtt = app.helper.mqtt;

 board = new five.Board({'port': 'COM3'});

  board.on("ready", function() {

    button = new five.Button(2);

    board.repl.inject({
      button: button
    });

    // "down" the button is pressed
    button.on("down", function() {
      mqtt.publish('hello');
      // mailer.main();
    });

  });
}