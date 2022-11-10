require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('connected to db');
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        });
    })
    .catch(error => {
        console.log(error);
    });

app.use('/api/workouts', workoutRoutes);