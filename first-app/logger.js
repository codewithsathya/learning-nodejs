let url = "https://logger.io/log";

function log(message) {
  console.log(message);
}

module.exports.log = log;
//module.exports = log; takes function instead of object
