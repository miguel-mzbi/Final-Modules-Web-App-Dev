const mongoose = require("mongoose");
const Schema = mongoose.schema;

let userSchema = new Schema({
    nickname: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);