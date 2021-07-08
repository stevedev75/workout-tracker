const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
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

