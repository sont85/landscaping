'use strict';
var express = require('express');
var router = express.Router();
var stripe = require('stripe')(process.env.TEST_SECRET_KEY);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/payment', function(req, res) {
  var charge = stripe.charges.create({
    amount: req.body.amount,
    currency: 'usd',
    source: req.body.stripeToken,
    receipt_email: 'sont85@gmail.com',
    description: 'Example charge, JOHN SMITH 29.99 AUGUST'
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      console.log('------------',err);
      res.json(err.message);
    } else {
      console.log(charge);
      res.json('success');
    }
  });
});

module.exports = router;
