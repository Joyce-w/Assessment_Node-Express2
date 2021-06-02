/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const jsonschema = require('jsonschema')
const ExpressError = require('../helpers/expressError');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    //Fixes Bug #3
    const username_result = jsonschema.validate(username, { "type": "string" })
    const password_result = jsonschema.validate(password, {"type" : "string"})
    if (!username_result.valid || !password_result.valid) {
      throw new ExpressError('Invalid username/password format', 401)
    }
    let user = await User.register({ username, password, first_name, last_name, email, phone });
    const token = createTokenForUser(username, user.admin);

    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    //Fixes Bug #4
    const username_result = jsonschema.validate(username, { "type": "string" })
    const password_result = jsonschema.validate(password, {"type" : "string"})
    if (!username_result.valid || !password_result.valid) {
      throw new ExpressError('Invalid username/password format', 401)
    }

    let user = User.authenticate(username, password);
    console.log(user)
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
