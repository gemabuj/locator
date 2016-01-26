var express = require('express');
var router = express.Router();
/* var ctrlMain = require('../controllers/main'); */
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* Defining as a function 
var homepageController = function(req, res){
	res.render('index', {title: 'Express Yeah'});
};
*/

/* GET homepage */
/* router.get('/', ctrlMain.index); */

