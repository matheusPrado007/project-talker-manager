const BAD_REQUEST = 400;
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (email) {
    return next(); 
  } 
    return res.status(BAD_REQUEST).send({
      message: 'O campo "email" é obrigatório',
    });
};

const validateRegexEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  if (emailRegex.test(email)) {
    return next(); 
  } 
    return res.status(BAD_REQUEST).send({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password) {
    return next(); 
  } 
    return res.status(BAD_REQUEST).send({
      message: 'O campo "password" é obrigatório',
    });
};

const validatePasswordLength = (req, res, next) => {
  const { password } = req.body;
  const passwordLength = 6;
  if (password.length >= passwordLength) {
    return next(); 
  } 
    return res.status(BAD_REQUEST).send({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
};

module.exports = {
  validateEmail,
  validateRegexEmail,
  validatePassword,
  validatePasswordLength,
};
