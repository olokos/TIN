var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/result_page', function(req, res, next) {
  res.render('result_page', { title: 'Node.js DB APP Result page', resultOp: operation, tableToOp: tableToOperateOn });
});

module.exports = router;
