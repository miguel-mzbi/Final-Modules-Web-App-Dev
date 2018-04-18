const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = "mongodb://localhost/demo";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(uri).then(
    () => {
        console.log("Connected to DB");
    },
    (err) => {
        console.log(err);
    }
);

app.get("/getAllUsers", (req, res) => {

});

app.listen(1234);
