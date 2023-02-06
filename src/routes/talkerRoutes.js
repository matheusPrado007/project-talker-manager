const express = require('express');
const { readFile } = require('./talkers');

const router = express.Router();
const OK = 200;

router.get('/', async (_req, res) => {
  const talkers = await readFile();
  try {
    if (talkers.length <= 0) {
      return res.status(OK).json([]);
    } 
    return res.status(OK).json(talkers);
  } catch (err) {
    return res.status(500).json({ message: err.sqlMessage });
  }
  });

module.exports = router;