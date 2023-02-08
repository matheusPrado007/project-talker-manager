const express = require('express');

const {
  validateName,
  validateToken,
  validateAge,
  validateOfLegalAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateRateLength,
} = require('../middlewares/validateTalkers');
const {
  readFile,
  readFileById,
  writeFileTalker,
  updatedFile,
  deleteFile,
} = require('./talkers');

const talkerRouter = express.Router();
const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;
const UNAUTHORIZED = 401;
const CREATED = 201;
const DELETED = 204;

talkerRouter.get('/', async (_req, res) => {
  const talkers = await readFile();
  try {
    if (talkers.length <= 0) {
      return res.status(OK).json([]);
    }
    return res.status(OK).json(talkers);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: err.sqlMessage });
  }
});

talkerRouter.get('/search', validateToken, async (req, res) => {
  try {
    const { q } = req.query;
    const data = await readFile();

    if (!q || q.length === 0) {
      return res.status(200).json(data);
    }
    const filteredData = data.filter((element) => element.name.includes(q));
    return res.status(OK).json(filteredData);
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
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
    res.status(INTERNAL_SERVER_ERROR).json({ message: err.sqlMessage });
  }
});

talkerRouter.post(
  '/',
  validateName,
  validateToken,
  validateAge,
  validateOfLegalAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateRateLength,
  async (req, res) => {
    try {
      const data = await readFile();
      const newData = {
        id: data.length + 1,
        ...req.body,
      };
      await writeFileTalker(newData);
      return res.status(CREATED).json(newData);
    } catch (err) {
      return res.status(UNAUTHORIZED).json({ message: err.message });
    }
  },
);

talkerRouter.put(
  '/:id',
  validateName,
  validateToken,
  validateAge,
  validateOfLegalAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateRateLength,
  async (req, res) => {
    try {
      const { id } = req.params;
      const updateFile = req.body;
      const updateData = await updatedFile(Number(id), updateFile);
      return res.status(OK).json(updateData);
    } catch (err) {
      res.status(INTERNAL_SERVER_ERROR).json({ message: err.sqlMessage });
    }
  },
);

talkerRouter.delete('/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await deleteFile(Number(id));

    return res.status(DELETED).end();
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: err.sqlMessage });
  }
});

module.exports = talkerRouter;
