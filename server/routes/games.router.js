const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/:week', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const week = req.params.week
  const query = `
  SELECT * FROM "schedule" 
  WHERE "week" = $1
  ORDER BY "id" ASC;`;

  const values = [week]
  pool.query(query, values)
  .then((response) => {
      res.send(response.rows)
  })
  .catch((err) => {
      console.log('err', err);
  })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('this is req.body', req.body);
  const visitor = req.body.visitor_score
  const home = req.body.home_score
  const idToUpdate = req.params.id
  const week = req.body.week

  const sqlText = `
  UPDATE "schedule"
  SET "visitor_score" = $1, "home_score" = $2
  WHERE "id" = $3;
  `;
  const values = [visitor, home, idToUpdate]
  pool.query(sqlText, values)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('error in PUT', err);
      res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
});

module.exports = router;