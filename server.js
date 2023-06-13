const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const app = express();

app.use(cors());

async function getDataFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Ошибка чтения файла');
  }
}

app.get('/verbs', async (req, res) => {
  try {
    const jsonData = await getDataFromFile('db.json');
    console.log('jsonData', jsonData);
    res.json(jsonData);
  } catch (err) {
    res.status(500).json({error: 'Ошибка сервера'});
  }
});

// Запуск сервера на порте 3005
app.listen(3005, () => {
  console.log('Сервер запущен на порту 3005');
});
