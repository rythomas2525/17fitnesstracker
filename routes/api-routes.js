let db = require("../models")
const router = require("express").Router();

router.get("/api/workout/range", function (req, res) {
    db.workout.find({})
        .then(function (workouts) {
            res.json(workouts);
            console.log(workouts)
        })
        .catch(function (error) {
            res.json(error)
        });
});

router.get("/api/workout", function (req, res) {
    db.workout.find({})
        .then(function (workouts) {
            res.json(workouts);
        })
        .catch(function (error) {
            res.json(error)
        });
});

router.post("/api/workout", function (req, res) {
    db.workout.create({})
        .then(function (workout) {
            res.json(workout);
            console.log(workout)
        })
        .catch(function (error) {
            res.json(error)
        });
});

router.put("/api/workout/:id", function ({ body, params }, res) {
    db.workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (error) {
            res.json(error)
        });

});

module.exports = router;