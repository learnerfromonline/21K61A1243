const express = require('express');
const axios = require('axios');

const app = express();
const port = 9876;
const windowSize = 10;

const numberTypes = {
  p: 'primes',
  f: 'fibo',
  e: 'even',
  r: 'rand'
};

const numberCache = {
  p: [],
  f: [],
  e: [],
  r: []
};

app.get('/numbers/:numberType', async (req, res) => {
  const numberType = req.params.numberType;
  const url = `http://20.244.56.144/test/${numberTypes[numberType]}`;

  try {
    const response = await axios.get(url, { timeout: 500 });
    const numbers = response.data.numbers;

    // Update the number cache
    numberCache[numberType] = [...numberCache[numberType], ...numbers]
      .filter((num, index, self) => self.indexOf(num) === index) // Remove duplicates
      .slice(-windowSize);

    // Calculate average
    const avg = numberCache[numberType].reduce((acc, num) => acc + num, 0) / numberCache[numberType].length;

    const responseBody = {
      windowPrevState: numberCache[numberType].slice(0, -numbers.length),
      windowCurrState: numberCache[numberType],
      numbers,
      avg
    };

    res.json(responseBody);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching numbers');
  }
});

app.listen(port, () => {
  console.log(`Average calculator listening on port ${port}`);
});