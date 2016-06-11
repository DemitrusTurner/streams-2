// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'ChAWgrJHS9SsdMbhHq0hifmeO',
    consumer_secret: 'RX41RIku4YpM4vZcEvxHwWrVqT5azSVI5er5xbRhqDCnx4Dptx',
    access_token_key: '741679101103210496-HZqji4ivuwYIjPI69DzsE8JNf85dUPw',
    access_token_secret: 'MaFT6DuwyuuBN4IatglRCw0PCuWq9RW2rsxjdE9AuU3Cz'
  });

  return client;
};

module.exports = Helpers;
