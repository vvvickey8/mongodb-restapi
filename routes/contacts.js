var express = require('express')
  , router = express.Router()
  // , bodyParser = require('body-parser')
  , models = require('../models');

// var jsonParser = bodyParser.json({ type: 'application/json' });

router.post('/', function (req, res) {
  if(!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }
  var user = req.body;
  console.log('request body : ' + JSON.stringify(user));
  models.Contact.create({
    id:req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  }).then(function (contacts) {
    res.json(contacts);
  });
  });

// get all contacts
router.get('/', function (req, res) {
  console.log("code in /contacts");
  models.Contact.findAll({}).then(function (contacts) {
    res.json(contacts);
  });
});

// get single contact
router.get('/:id', function (req, res) {
  models.Contact.find({
    where: {
      id: req.params.id
    }
  }).then(function (contacts) {
    res.json(contacts);
  });
});

// delete a single contact
router.delete('/:id', function (req, res) {
  models.Contact.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (contacts) {
    res.json(contacts);
  });
});

// update single contact
router.put('/:id', function (req, res) {
  models.Contact.find({
    where: {
      id: req.params.id
    }
  }).then(function (contacts) {
    if (contacts) {
      contacts.updateAttributes({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone
      }).then(function (contacts) {
        res.send(contacts);
      });
    }
  });
});



module.exports = router