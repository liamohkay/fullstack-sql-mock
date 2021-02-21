const dbHelpers = require('../db/dbhelpers.js');

const controller = {

  get: (req, res) => {
    dbHelpers.get((err, data) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(data);
    });
  },

  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = controller;