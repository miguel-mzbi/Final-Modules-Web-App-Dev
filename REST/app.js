const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const URI = "mongodb://localhost/rest_test";

mongoose.connect(URI).then(
    () => {
        console.log("CONNECTED TO MONGO");
    },
    (err) => {
        console.log(err);
    }
)
app.use("/api", require("./routes/api").router);
app.get("/", (req, res) => {
    res.send("WORKING");
})

app.listen(3000, () => {
    console.log("LISTENING");
});
