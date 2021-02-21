const db = require('./index.js');

var getQueryArgs = req => {
  let cols = [];
  let vals = [];
  Object.keys(req.body).map(key => {
    cols.push(key);
    vals.push(`'${req.body[key]}'`);
  });

  return { cols, vals };
};

const dbHelpers = {

  get: (callback) => {
    let query = `SELECT * FROM products`;
    db.query(query, (err, data) => callback(err, data));
  },

  post: (req, callback) => {
    let args = getQueryArgs(req);
    let query = `
      INSERT INTO products (${args.cols.join(', ')})
      VALUES (${args.vals.join(', ')})`;
    db.query(query, (err, data) => callback(err, data));
  }

  // updateProductHelper = () =>

  // deleteProductHelper = () =>

}

module.exports = dbHelpers;