const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    playerName:{type: String, unique: true},
    email:{type: String, unique: true},
    password: String,
    createdAt: date
});

module.exports = mongoose.model("Player",playerSchema);
