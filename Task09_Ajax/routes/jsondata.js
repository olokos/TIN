var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/jsondata', function(req, res, next) {
  res.render('jsondata', { title: 'Express' });
});

module.exports = router;
