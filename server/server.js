require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});

app.use('/api/workouts', workoutRoutes);