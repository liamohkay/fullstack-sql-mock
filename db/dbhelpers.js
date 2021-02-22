const db = require('./index.js');

var getQueryArgs = req => {
  let cols = [];
  let vals = [];
  Object.keys(req.body).map(key => {
    cols.push(key);
    if (key === 'item' || key === 'image') {
      vals.push(`'${req.body[key]}'`);
    } else {
      vals.push(req.body[key]);
    }
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
  },

  put: (req, callback) => {
    let args = getQueryArgs(req);
    let setVals = []

    for (i = 0; i < args.cols.length; i++) {
      setVals.push(`${args.cols[i]}=${args.vals[i]}`);
    }

    let query = `
      UPDATE products
      SET ${setVals.join(', ')}
      WHERE id=${req.params.id}`;
    db.query(query, (err, result) => callback(err, result));
  },

  delete: (req, callback) => {
    query = `DELETE FROM products WHERE id=${req.params.id}`;
    db.query(query, (err, result) => callback(err, result));
  },

  getLogin: (req, callback) => {
    let query = `
    SELECT * FROM users
    WHERE username = ${req.params.username}
    AND password = ${req.params.password}`;
    db.query(query, (err, data) => callback(err, data));
  }

}

module.exports = dbHelpers;