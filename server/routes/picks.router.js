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
    // POST route code here
    console.log('hello from post, this is req.body:', req.body);
    console.log('hello from post, this is req.body.schedule_id:', req.body);
    console.log('this is req.user.id', req.user.id);

    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        const queryText = `
            INSERT INTO "picks" ("user_id", "schedule_id", "pick")
            VALUES 
            (1$, $2, $3)`;
    } catch (error) {

    }

    let values = [req.user.id, req.body.schedule_id, req.body.pick]
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            res.sendStatus(500);
        })
});

module.exports = router;