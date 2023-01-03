const express = require('express');
const workoutController = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/', workoutController.getWorkouts);

router.get('/:id', workoutController.getWorkout);

router.post('/', workoutController.createWorkout);

router.delete('/:id', workoutController.deleteWorkout);

router.patch('/:id', workoutController.updateWorkout);

module.exports = router;