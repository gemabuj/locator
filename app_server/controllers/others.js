/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('about', {
    title: 'About LocATor',
    content: 'LocATor is my attempt to create web application using MEAN stack. Building an entire web application from front to back with just one language is now possible, using JavaScript. The MEAN stack is comprised of the best-of-breed technologies in this arena. You’ve got MongoDB for the database, Express for the server-side web-application framework, AngularJS for the client-side framework, and Node for the server-side platform.\n\nFull-stack development is very rewarding when you get it right. There are many moving parts to an application and it’s your job to get them working in harmony. The best first step you can take is to understand the building blocks you have to work with and look at the ways you can put them together to achieve different results.'
  });
};

/* GET 'behind the scene' page */
module.exports.behindScene = function(req, res){
  res.render('index', {title: 'Behind The Scene'});
};