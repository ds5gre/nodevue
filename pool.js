const mysql     = require('mysql'),
      util      = require('util'),
      Promise   = require('bluebird');
Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_INFO = {
    host    : '115.71.232.22',
    user    : 'testuser',
    password: 'tetuser!@#',
    database: 'testdb',
    multipleStateents: true,
    connectionLimit: 5,
    waitForConnections: false
};
