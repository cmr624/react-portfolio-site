const express = require('express');
const router = express.Router();
const db = require('../database');
  
  // Answer webdev API request.
  router.get('/webdev', function (req, res) {
    db.collection("webdev").find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get webdev database.");
        } else {
            res.status(200).json(docs);
        }
      });
  });

  router.get('/games', function (req, res) {
    db.collection("games").find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get games database.");
        } else {
            res.status(200).json(docs);
        }
      });
  });

module.exports = router;
