const router = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");


router.post("/api/workouts", (req, res) => {
   Workout.create({})
        .then((workout) => {
            res.status(201).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});



router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            },
        },
    ])
        .then((workout) => {
            res.status(200).json(workout);
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



router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    {$sum: '$exercises.duration'},
                totalWeight:
                    {$sum: '$exercises.weight'}
            }
        }
    ])
        .limit(10)
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


module.exports = router;