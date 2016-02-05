/* Sample of module.exports controller
module.exports.add.locationsCreate = function (req, res){
}; */

var mongoose = require('mongoose');
var Loc = mongoose.model('Location');
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};