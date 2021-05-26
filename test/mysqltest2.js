const { executionAsyncResource } = require('async_hooks');
const { pathToFileURL } = require('url');
const util  = require('util'),
      Promise = require('bluebird');

const Pool = require('../pool');

const sql1 = "select count(*) from user";
const sql2 = "select count(*) from time_zone";

const pool = new Pool();

Promise.using( pool.connect(), conn => {
    conn.beginTransaction( txerr => {

        Promise.all([
            conn.queryAsync(sql1),
            conn.queryAsync(sql2)
        ]).then (r => {
            for (let i=0; i<r.length; i++)
            console.log(`sql${i+1}=`, r[i]);
            conn.commit();
            pool.end();
        }).catch( e => {
            conn.rollback();
            pool.end();
        });
    });
});

function execut(fn){
    Promise.using( pool.connect(), conn => {
        conn.beginTransaction( txeer => {
            fn(conn);
        });
    });
}
// Promise.using( pool.connect(), conn => {
//     Promise.all([

//         conn.queryAsync(sql1),
//         conn.queryAsync(sql2)
//     ]).then( r => {
//         console.log("End of Then !!!!!");
//         console.log("sql1=", r[0]);
//         console.log("sql2=", r[1]);
//         pool.end();

//     }).catch( err => {
//         console.log("Error:::::", err);
//         pool.end();
//     });
// });

// Promise.using( pool.connect(), conn =>{
//     conn.queryAsync(sql1)
//         .then(console.log)
//         .catch( err => {
//             console.log("err>>", err);
//         });
    
//     pool.end();
// });


// Promise.using( pool.connect(), conn => {
//     conn.queryAsync(sql1, (err, ret) => {
//         console.log("sql1=", ret);

//         // conn.queryAsync(sql2, (err2, ret2) => {
//         //     util.log("sql2=", ret2.affectedRows);
//         // });
//     });

//     pool.end();
// });