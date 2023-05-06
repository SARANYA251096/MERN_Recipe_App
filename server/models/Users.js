const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    savedRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipes",
        
    }],
});


const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
