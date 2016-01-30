var mongoose = require('mongoose');

/* Schema for opening time */
var openingTimeSchema = new.mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true}
}),

/* Schema for review */
var reviewSchema = new.mongoose.Schema({
  author: String,
  rating: {type: Number, required: true, min: 0, max: 5 },
  reviewText: String,
  createdOn: {type: Date, default: Date.now}
});

/* Schema for location 
in the bottom-most we add openingTimeSchema and reviewSchema */
var locationSchema = new.mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, 'default': 0, min: 0, max: 5 },
  facilities: [String],
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});
