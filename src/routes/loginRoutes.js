const express = require('express');
const crypto = require('crypto');

const loginRouter = express.Router();

const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

loginRouter.post('/', async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  const randomToken = {
    token,
  };
  try {
    return res.status(OK).json(randomToken);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: err.sqlMessage });
  }
});

module.exports = loginRouter;
