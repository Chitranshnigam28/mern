const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
//@Route POST api/users
//@desc Register User
//@access public
router.post(
  '/',
  [
    check('name', 'Name is required').not().notEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
  }
);
module.exports = router;
