const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('hello from member router');
  // GET route code here

  // get all users that are not the admin
    const sqlText = `
    SELECT * FROM "user"
    WHERE "access_level" = 0;
    `;

    pool.query(sqlText)
    .then(response => {
        console.log('this is response.rows', response.rows);
        res.send(response.rows)
    })
    .catch(err => {
        console.log('error in member get', err);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
