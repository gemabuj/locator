/* GET 'homelist' page */
module.exports.homelist = function(req, res){
	res.render('index', {title: 'Home'});
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res){
	res.render('index', {title: 'List of Locations'});
};

/* GET 'add review' page */
module.exports.addReview = function(req, res){
	res.render('index', {title: 'Add Your Review'});
};