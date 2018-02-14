const express = require('express');
const { buildUser } = require('../users');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = buildUser(req.body);

  if (newUser) {
    users.push(newUser);
    res.json(newUser);
  } else {
    res.status(400).json({
      error: 'data must have firstName and lastName',
      example: {
        firstName: 'Timothée',
        lastName: 'GAUTHIER',
      },
    });
  }
});

module.exports = router;
