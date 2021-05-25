const { connect } = require('http2');
const mysql     = require('mysql'),
      util      = require('util'),
      Promise   = require('bluebird');
const { endianness } = require('os');
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

module.exports = class {
    constructor(dbinfo) {
        dbinfo = dbinfo || DB_INFO;
        this.pool = mysql.createPool(dbinfo);
    }

connect() {
    return this.pool.getConnectionAsync().disposer(conn => {
        return conn.release();
    });
}

end() {
    this.pool.end( function(err) {
        util.log(">>>>>>>>>>>>>>>> end of pool!!");
        if (err)
        util.log("err pool ending!!");
    });
}
};