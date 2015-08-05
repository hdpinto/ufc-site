var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toronto Area Contractor | Uncle Frank\'s Construction' });
});

module.exports = router;
