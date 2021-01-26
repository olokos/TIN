var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('10a', { title: 'Express' });
});

module.exports = router;
