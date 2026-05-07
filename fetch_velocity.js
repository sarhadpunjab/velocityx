const fs = require('fs');

async function fetchHTML() {
  try {
    const res = await fetch('https://velocityx.com/');
    const text = await res.text();
    fs.writeFileSync('velocityx.html', text);
    console.log('Successfully fetched velocityx.com');
  } catch (err) {
    console.error(err);
  }
}

fetchHTML();
