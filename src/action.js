const axios = require('axios');

async function run() {
  const response = await axios.get('https://api.sampleapis.com/coffee/hot/1');
  const { data = [] } = response;
  const firstEntry = data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);
}

run();