const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((workout) => {
            res.status(201).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


router.put("/api/workouts/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.Workout.updateOne(
        { _id: id },
        {
            $push: {
                exercises: { ...body },
            },
        }
    )
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;