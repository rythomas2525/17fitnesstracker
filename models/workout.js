const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// schema for workouts
// const workoutSchema = new Schema({
//     day: { type: Number, required: true },
//     exercises: [
//         {
//             type: {
//                 type: String,
//                 required: true
//             },
//             name: {
//                 type: String,
//                 required: true
//             },

//             weight: {
//                 type: Number,
//                 required: true
//             },
//             reps: {
//                 type: Number,
//                 required: true
//             },
//             sets: {
//                 type: Number,
//                 required: true
//             },
//             duration: {
//                 type: Number,
//                 required: true
//             }
//         }
//     ]
// });


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "resistance"
            },
            name: {
                type: String,
                trim: true,
                required: "type of resistance"
            },
            duration: {
                type: Number,
                trim: true,
                required: "duration"
            },
            weight: {
                type: Number,
                trim: true,
                required: "amount of weight"
            },
            reps: {
                type: Number,
                trim: true,
                required: "how many reps?"
            },
            sets: {
                type: Number,
                trim: true,
                required: "how many sets?"
            }
        },
        {
            type: {
                type: String,
                trim: true,
                required: "cardio"
            },
            name: {
                type: String,
                trim: true,
                required: "cardio exercise name"
            },
            distance: {
                type: Number,
                trim: true,
                required: "distance"
            },
            duration: {
                type: Number,
                trim: true,
                required: "duration"
            },
        },
        {
            versionKey: false
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
});
const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;