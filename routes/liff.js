var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const name = req.query.name
    const age = req.query.age
    const id = req.query.id
    

    res.sendFile(__dirname + '/index.html');
    
});

module.exports = router;