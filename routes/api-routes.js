const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (rew, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


router.get("api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then ((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


