const util  = require('util'),
      Promise = require('bluebird');

const Pool = require('../pool');

const sql1 = "update User set lastlogin=now() where uid='user1'";
const pool = new Pool();

Promise.using( pool.connect(), conn => {
    conn.queryAsync(sql1, (err, ret) => {
        util.log("sql1=", ret.affectedRows);

        // conn.queryAsync(sql2, (err2, ret2) => {
        //     util.log("sql2=", ret2.affectedRows);
        // });
    });
});