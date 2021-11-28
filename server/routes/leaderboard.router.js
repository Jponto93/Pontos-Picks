const express = require('express');
// const { resetWarningCache } = require('prop-types');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('hello from member router');
  // GET route code here

  // get all users that are not the admin
    const sqlText = `
    SELECT "id", "username", "email", "pick_score", "display_name", "image" FROM "user"
    WHERE "access_level" = 0
    ORDER BY "pick_score" DESC;
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

module.exports = router;