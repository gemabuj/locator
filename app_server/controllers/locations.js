/* GET 'homelist' page with locationslist.jade layout */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'LocATor - Find a place to work with wifi',
    pageHeader: {
      title: 'LocATor',
      strapline: 'find places to work with wifi near you!'
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
  res.render('locations-info', {
    title: 'LocATor - List of Locations',
    pageHeader: {
      title: 'LocATor',
      strapline: 'The Captain'
    },
    sidebar: {
      context: 'is on LocATor because it has accessible wifi and space to sit down with your laptop and get some work done. The Captain are a lounge, which mean it is usually bigger than a bar, may have a dress code and often time charge a "cover" or "door" charge. Lounges often have themes of their own, have much more expensive decor and have higher drink prices than a bar. Some go for the super upscale as "ULTRALounges", while it may or may not offer food. Lounges usually have multiple bars and booths and tables for people to "lounge around" in or socialize in groups. Lounges may also share other features of a bar and usually has a DJ and small dance floor but its not a focus.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'The Captain',
      address: 'Damai Street Krikilan Yogyakarta 55581',
      rating: 4,
      facilities:['Bar', 'Lounge', 'Live Music', 'Wifi'],
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '11:00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '8:00am',
        closing: '11:00pm',
        closed: false
      },{
        days: 'Sunday',
        opening: '4:00pm',
        closing: '11:00pm',
        closed: false
      }],
      reviews: [{
        author: 'Abdul A',
        rating: 4,
        timestamp: 'January 25, 2016',
        reviewText: 'What a great place. Recommended.'
      },{
        author:'Bernadette B',
        rating: 2,
        timestamp: 'January 26, 2016',
        reviewText: 'It was okay. I guess.'
      },{
        author: 'Charlotte C',
        rating: 4,
        timestamp: 'January 27, 2016',
        reviewText: 'Nice, tidy and quite fast wifi.'
      }]
    }
  });
};

/* GET 'add review' page */
module.exports.addReview = function(req, res){
  res.render('locations-review-form', {
    title: 'LocATor - Add Your Review',
    pageHeader: {
      title: 'LocATor',
      strapline: 'Review'
    }
  });
};