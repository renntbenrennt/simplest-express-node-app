const express = require('express');
const app = express();
const port = 2121;

app.get('/', (req, res) => res.send('Hello world'));

app.post('/user', (req, res) => res.send('Wow, this is working?!!! OH MY GOD!!!'));

app.listen(port, () => console.log(`The app is running and listening on ${port}`));