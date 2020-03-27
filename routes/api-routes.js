const router = require("express").Router();
const db = require("../models/workout");

router.get("/api/workout", ({ body }, res) => {
    db.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



router.get("/api/workout/range", ({ body }, res) => {
    db.find({})
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
router.post("/api/workout", ({ body }, res) => {
    db.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

router.put("/api/workout/:id", function ({ body, params }, res) {
    db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then(function (dbWorkout) {
            res.json(dbWorkout);
        })
        .catch(function (error) {
            res.json(error)
        });
});




module.exports = router;