/* Create file to hold the controller code */
module.exports.index = function(req, res){
	res.render('index', {title: 'Express Still Yeah'});
};