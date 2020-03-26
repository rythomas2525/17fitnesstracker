var path = require("path")

module.exports = function (app) {
    // pushes index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    // pushes stats.html
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

    // pushes excercise.html
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })

}