const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
});
