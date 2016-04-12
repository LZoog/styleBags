var express = require('express');
var router = express.Router();
var ColorBag = require('../models/colorBag');

router.post('/', function(req, res, next) {
  var rgbsString = req.body.rgbs;
  var rgbsStringSplit = rgbsString.replace(/,r/g, 'splitr');
  var rgbs = rgbsStringSplit.split('split');

  var newColorBag = ColorBag({
      name: req.body.colorBagName,
      rgbs: rgbs,
      userId: req.body.userId
  });

  newColorBag.save(function(err, user) {
    if (err) console.log(err);
    //res.redirect('/');
    res.json(newColorBag);
  });
});
module.exports = router;
