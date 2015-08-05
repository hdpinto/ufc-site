var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'About | Uncle Frank\'s Construction', page: req.url });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About | Uncle Frank\'s Construction', page: req.url });
});
router.get('/gallery', function(req, res, next) {
  res.render('index', { title: 'Gallery | Uncle Frank\'s Construction', page: req.url });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us | Uncle Frank\'s Construction', page: req.url });
});

module.exports = router;
