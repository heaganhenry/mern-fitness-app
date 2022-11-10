const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});