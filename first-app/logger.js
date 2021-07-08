(function (exports, require, module, __filename, __dirname) { //IIFE
  let url = "https://logger.io/log";

  function log(message) {
    console.log(message);
  }

  module.exports = log;
  module.exports.log = log;
  exports.log = log;
  //exports = log; //produces error
})
//module.exports = log; takes function instead of object
