const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = "mongodb://localhost/demo";

const UserModel = require("./models/userSchema")

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
    UserModel.find({}).then(
        (users) => {
            res.json(users);
        },
        (err) => {
            console.log(err);
            res.status(400).json({error: err}).send();
        }
    )
});

app.post("/registerUser", (req, res) => {
    let newUser = new UserModel({
        nickname: req.body.nickname,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    newUser.save().then(
        () => {
            UserModel.find({nickname: req.body.nickname}).then(
                (user) => {
                    res.status(200).json(user);
                },
                (err) => {
                    console.log(err);
                    res.status(500).json({error: err}).send();
                }
            );
        },
        (err) => {
            console.log(err);
            res.status(400).json({error: err}).send();
        }
    );
})

app.delete("/deleteUser", (req, res) => {
    UserModel.remove({nickname: req.body.nickname}).then(
        () => {
            res.status(200).send();
        },
        (err) => {
            console.log(err);
            res.status(500).json({error: err}).send();
        }
    );
})

app.put("/updateUser", (req, res) => {
    UserModel.update({nickname: req.body.nickname}, {$set: {nickname: req.body.nNickname}}).then(
        () => {
            res.status(200).send();
        },
        (err) => {
            console.log(err);
            res.status(500).json({error: err}).send();
        }
    )
})

app.listen(1234);
