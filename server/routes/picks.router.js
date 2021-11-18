const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
});



/**
 * POST route template
 */
 router.post('/', async (req, res) => {
    const id = req.user.id
    async function sqlInserter(picks) {
        // function take in picks(req.body)
        //the loop will send one index of req.body at a time
        for (let i = 0; i < picks.length; i++) {
            console.log('you are in the loop inside sqlInsert');
            const sqlText = `
            INSERT INTO "picks" ("user_id", "schedule_id", "pick")
            VALUES 
            ($1, $2, $3)`;
            await connection.query(sqlText, [id, picks[i].schedule_id, picks[i].pick])
        } // end loop
    } // end sqlInserter

    // POST route code here
    let picks = req.body;
    console.log('this is picks', picks);
    const connection = await pool.connect()
    try {
        console.log('You have made it to the door of sqlInerter');
        await connection.query('BEGIN');
        await sqlInserter(picks);
        await connection.query('COMMIT');
        console.log('finished insert');
        res.sendStatus(200);
    } catch (error) {
        await connection.query('ROLLBACK');
        console.log('Transaction error - rolling back', error);
        res.sendStatus(500);
    } finally {
        connection.release();
    }
});


// router.post('/', async (req, res) => {
//     const id = req.user.id
//     async function sqlInserter(picks) {
//         // function take in picks(req.body)
//         //the loop will send one index of req.body at a time
//         for (let i = 0; i < picks.length; i++) {
//             const connection = await pool.connect()
//             console.log('you are in the loop inside sqlInsert');
//             const sqlText = `
//             INSERT INTO "picks" ("user_id", "schedule_id", "pick")
//             VALUES 
//             ($1, $2, $3)`;
//             await connection.query(sqlText, [id, picks[i].schedule_id, picks[i].pick])
//         } // end loop
//     } // end sqlInserter

//     // POST route code here
//     let picks = req.body;
//     console.log('this is picks', picks);
//     const connection = await pool.connect()
//     try {
//         console.log('You have made it to the door of sqlInerter');
//         await connection.query(sqlInserter(picks));
//         await connection.query('COMMIT');
//     } catch (error) {
//         await connection.query('ROLLBACK');
//         console.log('Transaction error - rolling back', error);
//         res.sendStatus(500);
//     } finally {
//         connection.release();
//     }
// });

module.exports = router;