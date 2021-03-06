const dbHelpers = require('../db/dbhelpers.js');

const controller = {

  get: (req, res) => {
    dbHelpers.get((err, data) => {
      if (err) res.status(418).send(err);
      else res.status(200).send(data);
    });
  },

  post: (req, res) => {
    dbHelpers.post(req, (err, result) => {
      if (err) res.status(418).send(err);
      else res.status(200).send(`Posted ${req.body.item} to db`);
    });
  },

  put: (req, res) => {
    dbHelpers.put(req, (err, result) => {
      if (err) res.status(418).send(err);
      else res.status(200).send(`Updated product id: ${req.params.id}`);
    });
  },

  delete: (req, res) => {
    dbHelpers.delete(req, (err, result) => {
      if (err) res.status(418).send(err);
      else res.status(200).send(`Deleted product id: ${req.params.id}`)
    });
  }

}

module.exports = controller;