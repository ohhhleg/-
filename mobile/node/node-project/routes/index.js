var express = require('express');
var router = express.Router();
const {
  find,
  plus
} = require('../lib/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',async function (req, res, next) {
  // res.append('Access-Control-Allow-Origin', '*');
    let data = await find('goodlist', {});
    res.send(data);
});
/* 登录*/ 
router.post('/login', async function (req, res, next) {
  // res.append('Access-Control-Allow-Origin', '*');
  let name = req.body.name;
  let psw = req.body.psw;
  // console.log(req.body);
  let data = await find('sign', {
    name,
    psw
  });
  // console.log(data);
  res.send(data);
});
/*注册*/
router.post('/reg', async function (req, res, next) {
  let name = req.body.name;
  let psw = req.body.psw;
  let data = await plus('sign', {
    name:name,
    psw:psw
  })
  res.send(data);
});
//查找商品
router.get('/stock',async function (req, res, next) {
  // res.append('Access-Control-Allow-Origin', '*');
    let data = await find('stock', {});
    res.send(data);
});
module.exports = router;
