const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require('body-parser');

const blobs = require("./blobs");

app.set("view engine", "html");
app.engine("html", hbs.__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/views/index.html");
    res.render("index", {title:"My Blobs", entries: blobs.getBlobsEntries()});
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
});

app.get("/article/:id", (req, res) => {
    // res.sendFile(__dirname + "/views/article.html")
    let entry = blobs.getBlobEntry(req.params.id);
    console.log(entry);
    res.render("article", {title: entry.title, blob: entry});
});

app.listen(8008);