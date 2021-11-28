const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const email = req.body.email
  const displayName = req.body.displayName

  const queryText = `INSERT INTO "user" (username, password, display_name, email)
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [username, password, displayName, email])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

//for updating current user information
router.put('/', (req, res) => {
  console.log('req.body:', req.body);
  console.log('req.user.id', req.user.id);

  let email = req.body.email;
  let displayName = req.body.displayName
  let id = req.user.id;

  const sqlText = `
  UPDATE "user"
  SET "email" = $1, "display_name" = $2
  WHERE "id" = $3;
  `
  let values = [email, displayName, id]
  pool.query(sqlText, values)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('error in PUT', err);
      res.sendStatus(500);
    })
})

module.exports = router;
