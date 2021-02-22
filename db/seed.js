
// const Products = require('./models.js');
const db = require('./index.js');

// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const adjectives = ['Used', 'New', 'Refurbished', "PARTS ONLY"];
const brand = ['Sonny', 'Ninetendo', 'Microhard', 'Azeus', 'Sansong', 'Apull', 'Wowhey', 'Illogitech'];
const noun = ['Smartphone', 'Monitor', 'Headphones', 'Earbuds', 'Trashcan', 'Laptop', 'Gaming System', 'TV', 'Personal Air Conditioning Unit', 'Gaming Mouse', 'Tablet', 'Flip Phone', 'Pager'];

const createProduct = () => {
  let product = {};
  product.item = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  product.min_cost = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.curr_bid = parseFloat(Math.ceil(Math.random() * Math.ceil(10000)));
  product.ends_in = Math.ceil(Math.random() * Math.ceil(3));
  // the lorempixel images render very slowly for some reason.
  // don't worry too much if some images load while the others don't.
  // it's probably not your fault
  product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  return product
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 10; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}

/* ------------------
Users + Password Seed
------------------ */
const alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
const users = ['liam', 'mai', 'sarah', 'chris', 'weilly', 'justine', 'sophia', 'phil', 'leila', 'spacemilk', 'alyssa'];
const tags = ['123', '2021', '2020', 'covid', '69', '420', '000', '1994', '1995'];

// Helper functions
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Randomly picks a user
const createUser = () => users[getRandomNumber(0, users.length)] + tags[getRandomNumber(0, tags.length)];

// Creates a random password of capital alpha numeric
const createPassword = (min, max) => {
  let length = getRandomNumber(min, max);
  let password = '';

  for (var i = 0; i < length; i++) {
    password += alphaNum[getRandomNumber(0, alphaNum.length)];
  }

  return password;
};

const createUsers = () => {
  let users = [];
  for (var i = 0; i < 3; i++) {
    users.push({ username: createUser(), password: createPassword(5, 15) });
  }
  return users;
};

/* -------------
Insert Mock Data
------------- */
const insertMockData = function() {
  // Products
  let mockProducts = createProducts();
  let mockUsers = createUsers();

  // Dynamically inserts into db table. Rows is an arry containg objs of key val pairs for the tbl
  var insertIntoTbl = (tbl, rows) => {
    rows.map(row => {
      let cols = [];
      let vals = [];

      Object.keys(row).map(key => {
        cols.push(key);
        vals.push(`'${row[key]}'`);
      });

      let query = `
        INSERT INTO ${tbl} (${cols.join(', ')})
        VALUES (${vals.join(', ')});`
      db.query(query, (err, result) => {
        if (err) {
          console.log(err);
        } else if (tbl === 'products') {
          console.log(`Successfully added ${row.item} to ${tbl}`);
        } else if (tbl === 'users') {
          console.log(`Successfully added ${row.username} to ${tbl}`);
        }
      });
    });
  }

  insertIntoTbl('products', mockProducts);
  insertIntoTbl('users', mockUsers);

}();