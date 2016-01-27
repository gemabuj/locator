/* GET 'about' page */
module.exports.about = function(req, res){
	res.render('about', {title: 'About LocATor'});
};

/* GET 'behind the scene' page */
module.exports.behindScene = function(req, res){
	res.render('index', {title: 'Behind The Scene'});
};