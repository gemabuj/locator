/* GET 'homelist' page with locationslist.jade layout */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'LocATor - find a place to work with wifi',
    pageHeader: {
      title: 'LocATor',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: 'Looking for wifi and a seat? LocATor helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let LocATor help you find the place you are looking for.',
    locations: [{
      name: 'The Captain',
      address: 'Damai Street Krikilan Ngaglik Sleman 55581',
      rating: 4,
      facilities: ['Lounge','Live Music','Wifi','Security','Car Park']
    },{
      name: 'Kedai 24 Jam',
      address: 'Prujakan 22B Ngaglik Sleman 56755',
      rating: 1,
      facilities: ['Fake Bar', 'Crappy Food and Drink', 'Wifi', 'Noisy']
    },{
      name: 'Kedai Lumer',
      address: 'Kaliurang Street 8.7 Ngaglik Sleman 55565',
      rating: 4,
      facilities: ['Easy Dining', 'Friendly Waitresses', 'Wifi', 'Cozy']
    }]
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