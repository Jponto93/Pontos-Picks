const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let query = `
  SELECT * FROM "schedule" 
  WHERE "week" = 1;`
  pool.query(query)
  .then((response) => {
      res.send(response.rows)
  })
  .catch((err) => {
      console.log('err', err);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;