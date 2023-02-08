const fs = require('fs').promises;
const { join } = require('path');

const PATH_DATA = '../talker.json';

async function readFile() {
  try {
    const data = await fs.readFile(join(__dirname, PATH_DATA), 'utf-8');
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

async function writeFileTalker(newData) {
  try {
    const data = await readFile();
    const allData = JSON.stringify([...data, newData]);
    console.log('Arquivo escrito com sucesso!');
    return await fs.writeFile(join(__dirname, PATH_DATA), allData);
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

async function updatedFile(id, updatedData) {
  const data = await readFile();
  const updated = { id, ...updatedData };
  const newData = data.reduce((dataList, currentData) => {
    if (currentData.id === updated.id) return [...dataList, updated];
    return [...dataList, currentData];
  }, []);

  const newUpdatedData = JSON.stringify(newData);
  try {
    await fs.writeFile(join(__dirname, PATH_DATA), newUpdatedData);
    console.log(`Atualizou o id: ${id}`);
    return updated;
  } catch (error) {
    console.log(`Erro na escrita do arquivo: ${error.message}`);
  }
}

module.exports = {
  readFile,
  readFileById,
  writeFileTalker,
  updatedFile,
};
