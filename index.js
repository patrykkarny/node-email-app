const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT, () => console.log('Listen on port 3000'));