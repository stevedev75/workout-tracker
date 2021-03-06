const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        enum: ["resistance", "cardio"],
        required: "Options are 'resistance' or 'cardio'",
    },

    name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
    },

    duration: {
        type: Number,
        required: "Duration in minutes",
    },

    weight: {
        type: Number,
        required: isRequired("weight")
    },

    reps: {
        type: Number,
        required: isRequired("reps"),
    },

    sets: {
        type: Number,
        required: isRequired("sets"),
    },

    distance: {
        type: Number,
        required: isRequired("distance"),
    },
});

function isRequired(field) {
    return function () {
        if (field == "distance") {
            return this.type === "cardio";
        } else {
            return thid.type === "resistance";
        }
    };
}

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now,
        },

        exercises: [exerciseSchema],
    },

    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    }
);


workoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;
    this.exercises.forEach((el) => {
        totalDuration += el.duration;
    });
    return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;