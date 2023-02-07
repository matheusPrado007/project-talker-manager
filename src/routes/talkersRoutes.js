const express = require('express');
const { readFile, readFileById } = require('./talkers');

const talkerRouter = express.Router();
const OK = 200;
const NOT_FOUND = 404;

talkerRouter.get('/', async (_req, res) => {
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

talkerRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await readFileById(id);
    if (result) {
      return res.status(OK).json(result);
    }
    return res
      .status(NOT_FOUND)
      .json({ message: 'Pessoa palestrante não encontrada' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = talkerRouter;
