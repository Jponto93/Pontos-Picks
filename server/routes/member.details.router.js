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
     const {id, week} = req.query
     console.log('req.query', req.query);
    
    // get all users that are not the admin
      const sqlText = `
        SELECT * FROM "picks"
        WHERE "user_id" = $1 AND "week" = $2;
        `;
      pool.query(sqlText, [Number(id), Number(week)])
      .then(response => {
          console.log('this is response.rows', response.rows);
          res.send(response.rows)
      })
      .catch(err => {
          console.log('error in member get', err);
      })
    });

module.exports = router;