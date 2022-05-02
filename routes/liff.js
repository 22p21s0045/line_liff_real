var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const name = req.query.name
    const age = req.query.age
  res.json([name,age]);
});

module.exports = router;