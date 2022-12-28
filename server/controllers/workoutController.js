const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid id' });
    }

    const workout = await Workout.findById(id);
    if (!workout) {
        res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

const createWorkout = async (req, res) => {
    const { title, reps, weight } = req.body;

    const emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!reps) {
        emptyFields.push('reps');
    }
    if (!weight) {
        emptyFields.push('weight');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    try {
        const workout = await Workout.create({ title, reps, weight });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid id' });
    }

    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
        res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'Invalid id' });
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    if (!workout) {
        res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};