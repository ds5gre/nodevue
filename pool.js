const { connect } = require('http2');
const mysql = require('mysql'),
    util = require('util'),
    Promise = require('bluebird');
const { endianness } = require('os');
Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_INFO = {
    host: 'localhost',
    user: 'root',
    password: 'kim',
    database: 'mysql',
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
        this.pool.end(function (err) {
            console.log(">>>>>>>>>>>>>>>> end of pool!!");
            if (err)
                console.log("err pool ending!!");
        });
    }
};