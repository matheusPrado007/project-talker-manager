const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(UNAUTHORIZED).send({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16 || typeof authorization !== 'string') {
    return res.status(UNAUTHORIZED).send({
      message: 'Token inválido',
    });
  }
  return next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "name" é obrigatório',
    });
  }
  if (name.length < 3) {
    return res.status(BAD_REQUEST).send({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
  return next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "age" é obrigatório',
    });
  }
  if (typeof age !== 'number') {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "age" deve ser do tipo "number"',
    });
  }
  if (!Number.isInteger(age)) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "age" deve ser um "number" do tipo inteiro',
    });
  }
  return next();
};

const validateOfLegalAge = (req, res, next) => {
  const { age } = req.body;
  if (age <= 18) {
    return res.status(BAD_REQUEST).send({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  return next();
};

const validateTalk = (req, res, next) => {
  const data = req.body;
  if (!data.talk) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "talk" é obrigatório',
    });
  }
  return next();
};

const validateWatchedAt = (req, res, next) => {
  const data = req.body;
  const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
  if (!data.talk.watchedAt) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }
  if (!data.talk.watchedAt) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }
  if (!dateRegex.test(data.talk.watchedAt)) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  return next();
};

const validateRate = (req, res, next) => {
  const data = req.body;
  if (data.talk.rate === undefined || data.talk.rate === '') {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "rate" é obrigatório',
    });
  }
  return next();
};

const validateRateLength = (req, res, next) => {
  const data = req.body;
  if (
    !Number.isInteger(data.talk.rate)
    || data.talk.rate < 1
    || data.talk.rate > 5
  ) {
    return res.status(BAD_REQUEST).send({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
  return next();
};

module.exports = {
  validateName,
  validateToken,
  validateAge,
  validateOfLegalAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateRateLength,
};
