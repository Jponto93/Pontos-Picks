const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', (req, res) => {
    // GET route code here
     const id = req.params.id
     const week = req.body.week
     console.log('id:', id, ' and week:', week);
    
    // get all users that are not the admin
      const sqlText = `
      SELECT * FROM "picks" 
      WHERE "user_id" = $1
      `;
      pool.query(sqlText, [id])
      .then(response => {
          console.log('this is response.rows', response.rows);
          res.send(response.rows)
      })
      .catch(err => {
          console.log('error in member get', err);
      })
    });

module.exports = router;