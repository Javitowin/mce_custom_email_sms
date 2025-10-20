const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Endpoint EXECUTE
app.post('/api/execute', async (req, res) => {
  try {
    const inArgs = req.body.inArguments && req.body.inArguments[0];
    const channel = inArgs?.channel; // 'email' or 'sms'

    // TODO: autenticación y llamada a SFMC REST para MessageDefinition

    return res.status(200).json({ executed: true, channel });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// health check
app.get('/', (req, res) => res.send('Custom Activity Running'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port ' + (process.env.PORT || 3000));
});
