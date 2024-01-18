const axios = require('axios');

async function run() {
  const response = await axios.get('https://api.sampleapis.com/coffee/hot/1');
  console.log(response.data.title);
}

run();