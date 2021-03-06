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
    SELECT "id", "username", "email", "pick_score" FROM "user"
    WHERE "access_level" = 0
    ORDER BY "username" ASC;
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

// this is route for admin additional details 
// router.get('/:id', (req, res) => {
// // GET route code here
//  const id = req.params.id
//  const week = req.body.week
//  console.log('id:', id, ' and week:', week);

// // get all users that are not the admin
//   const sqlText = `
//   SELECT "id", "username", "email", "pick_score" FROM "user"
//   WHERE "access_level" = 0
//   ORDER BY "username" ASC;
//   `;

//   pool.query(sqlText)
//   .then(response => {
//       console.log('this is response.rows', response.rows);
//       res.send(response.rows)
//   })
//   .catch(err => {
//       console.log('error in member get', err);
//   })
// });
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  let scoreToUpdate = req.body.score
  let idToUpdate = req.params.id;

  const sqlText = `
  UPDATE "user" 
  SET "pick_score" = $1
  WHERE "user"."id" = $2;
  `;
  let values = [scoreToUpdate, idToUpdate]
  pool.query(sqlText, values)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  let idToUpdate = req.params.id;
  const sqlText = `
  DELETE FROM "user"
  WHERE "user"."id" = $1;
  `;
  let values = [idToUpdate]
  pool.query(sqlText, values)
    .then(response => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(500);
    })
})

module.exports = router;
