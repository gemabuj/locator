/* GET 'homelist' page with locationslist.jade layout */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'LocATor - find a place to work with wifi',
    pageHeader: {
      title: 'LocATor',
      strapline: 'Find places to work with wifi near you!'
    }
  });
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res){
  res.render('locations-info', {title: 'List of Locations'});
};

/* GET 'add review' page */
module.exports.addReview = function(req, res){
  res.render('locations-review-form', {title: 'Add Your Review'});
};