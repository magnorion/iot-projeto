module.exports = function (app) {
  var mqtt = require('mqtt')
  var client = mqtt.connect('mqtt://test.mosquitto.org')
  
  client.on('connect', function () {
    client.subscribe('presence', function (err) {
      if (!err) {
        client.publish('presence', 'App running...')
      }
    })
  })
  
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
  });

  return client;
}