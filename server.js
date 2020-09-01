
var express = require("express")
var app = express()
var db = require("./database.js")


var HTTP_PORT = 8000

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
app.get("/", (req, res, next) => {
    res.json({ "message": "Ohhk" })
});

app.get("/api/products", (req, res, next) => {
    var sql = "select * from products"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});


app.get("/api/blog", (req, res, next) => {
    var sql = "select * from blog"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});



app.use(function (req, res) {
    res.status(404);
});
