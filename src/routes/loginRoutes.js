const express = require('express');
const crypto = require('crypto');
const {
  validateEmail, validateRegexEmail,
  validatePassword, validatePasswordLength,
} = require('../middlewares/validateLogin');

const loginRouter = express.Router();
loginRouter.use(express.json());

const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

loginRouter.post('/', validateEmail, validateRegexEmail, validatePassword,
validatePasswordLength,
async (_req, res) => {
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
