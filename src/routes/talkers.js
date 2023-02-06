const fs = require('fs').promises;
const { join } = require('path');

async function readFile() {
  try {
    const data = await fs.readFile(join(__dirname, '../talker.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

async function readFileById(id) {
  try {
    const data = await readFile();
    const findById = data.find((dta) => dta.id === Number(id));
    return findById;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = {
  readFile,
  readFileById,
};