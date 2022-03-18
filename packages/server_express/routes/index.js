var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.RUN_TARGET);
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);
  console.log(process.env.encryption_DB_HOST);
  console.log(process.env.encryption_DB_USER);
  console.log(process.env.encryption_DB_PASS);
  console.log(process.env.JSON);
  res.render('index', { title: 'Express' });
});

module.exports = router;
