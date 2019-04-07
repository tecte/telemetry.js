const bowser = require('bowser');
const isbot = require('isbot');

@param header

exports.trackVisit = function(header) {

  var dnt = header['dnt'];
  var ua = header['user-agent'];
  var bot = isbot(ua);

  // Check DNT-header and detect bots
  if (dnt != '1' && bot != true) {

    var client = bowser.getParser(ua);

    // Client technology
    var browser = client.getBrowser();
    var os = client.getOS;
    var device = client.getPlatformType();

    //Track visit
    var json = '{"browser": browser, "os": os, "device": device}';
    visit = JSON.parse(json);

    console.log(visit);

  } else {

    // User does not consent to tracking
    // or might be a bot

  }

}
