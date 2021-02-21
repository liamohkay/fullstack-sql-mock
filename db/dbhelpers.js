const db = require('./index.js');

var getQueryArgs = req => {
  let cols = [];
  let vals = [];

  Object.keys(req.body).map(key => {
    cols.push(key);
    vals.push(`'${product[key]}'`);
  });

  return { cols, vals };
};

const dbHelpers = {

  getProductsHelper: (callback) => {
    let query = `SELECT * FROM products`;
    db.query(query, (err, data) => callback(err, data));
  },

  postProductsHelper: (req, callback) => {
    let args = getQueryArgs(req);
    let query = `
      INSERT INTO products (${args.cols.join(', ')})
      VALUES (${args.vals.join(', ')})`;
    db.query(query, (err, data) => callback(err, data));
  }

  // updateProductHelper = () =>

  // deleteProductHelper = () =>

}

