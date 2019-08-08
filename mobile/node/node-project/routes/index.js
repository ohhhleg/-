var express = require('express');
var router = express.Router();
const {
  find,
} = require('../lib/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
    let data = await find('goodlist', {});
    res.send(data);
});


module.exports = router;
