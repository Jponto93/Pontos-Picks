// const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
 router.post('/', rejectUnauthenticated, async (req, res) => {
    const id = req.user.id
    async function sqlInserter(picks) {
        // function take in picks(req.body)
        // loop through the array of picks
        for (let i = 0; i < picks.length; i++) {
            console.log('you are in the loop inside sqlInsert');
            const sqlText = `
            INSERT INTO "picks" ("user_id", "schedule_id", "pick", "week")
            VALUES 
            ($1, $2, $3, $4)`;
            //the loop will wait to send the next iteration til the current iteration is complete
            await connection.query(sqlText, [id, picks[i].schedule_id, picks[i].pick, picks[i].week])
        } // end loop
    } // end sqlInserter

    // POST route code here
    let picks = req.body;
    console.log('this is picks', picks);
    const connection = await pool.connect()
    try {
        // start the transaction
        await connection.query('BEGIN');
        // wait for the entire function to return successful before moving forward
        await sqlInserter(picks);
        // if it reaches this line it was successful
        await connection.query('COMMIT');
        console.log('finished insert');
        res.sendStatus(200);
    } catch (error) {
        // revert transcation as if it never happened, if it fails somewhere
        await connection.query('ROLLBACK');
        console.log('Transaction error - rolling back', error);
        res.sendStatus(500);
    } finally {
        connection.release();
    }
});


module.exports = router;