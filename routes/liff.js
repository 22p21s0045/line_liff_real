var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const name = req.query.name
    const age = req.query.age
    const id = req.query.id
    

    res.sendFile(__dirname + '/index.html');
    res.send("your id is " + id )
});

module.exports = router;