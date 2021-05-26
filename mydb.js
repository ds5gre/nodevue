const Promise = require('bluebird');

const Pool = require('./pool');

module.exports = {
    execute(fn){
        Promise.using( pool.connection(), conn =>{
            fn(conn);
        });
    },

    excuteTx(fn) {
        Promise.using( pool.connect(), conn =>{
            conn.beginTransaction ( txerr => {
                fn(conn);
            });
        });
    }
};

