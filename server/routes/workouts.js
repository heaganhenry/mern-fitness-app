const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.get('/', workoutController.getWorkouts);

router.get('/:id', workoutController.getWorkout);

router.post('/', workoutController.createWorkout);

router.delete('/:id', workoutController.deleteWorkout);

router.patch('/:id', workoutController.updateWorkout);

module.exports = router;