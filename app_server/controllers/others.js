/* GET 'about' page */
module.exports.about = function(req, res){
	res.render('index', {title: 'About This App'});
};

/* GET 'behind the scene' page */
module.exports.behindScene = function(req, res){
	res.render('index', {title: 'Behind The Scene'});
};