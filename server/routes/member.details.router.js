const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    // GET route code here
    console.log('you made in through to member.detail router');
    const { id, week } = req.query
    console.log('req.query', req.query);

    // get all users that are not the admin
    const sqlText = `
    SELECT "username", "pick", "result", "picks".week FROM "picks"
    JOIN "schedule" ON "picks".schedule_id = "schedule".id
    JOIN "user" ON "user".id = "picks".user_id
    WHERE "user_id" = $1 AND "picks"."week" = $2;
    `;
    const values = [Number(id), Number(week)]
    console.log('these are values:', values);
    pool.query(sqlText, values)
        .then(response => {
            console.log('this is response.rows', response.rows);
            res.send(response.rows)
        })
        .catch(err => {
            console.log('error in member get', err);
        })
});

module.exports = router;