const express = require('express');
const shows = require('./shows');
const app = express();
const port = 3000

app.get('/rest/shows', (req, res) => res.send(shows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))