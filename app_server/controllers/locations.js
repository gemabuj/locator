/* GET 'homelist' page with locationslist.jade layout */
module.exports.homelist = function(req, res){
	res.render('locations-list', {title: 'Home'});
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res){
	res.render('locations-info', {title: 'List of Locations'});
};

/* GET 'add review' page */
module.exports.addReview = function(req, res){
	res.render('index', {title: 'Add Your Review'});
};