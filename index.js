const express = require('express');
const app = express();
const port = 2121;

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log(`The app is running and listening on ${port}`));