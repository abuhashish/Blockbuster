const mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: [
            true,
            "username is required"
        ],
        unique: true,
        minlength: [3, 'username must be 3 characters or longer'],
    },
    Email: {
        type: String,
        required: [true,"email is requried"]
        },
    Age:{
        type:Number,
    },
    Password:{
        type:String, 
        required:[
            true,
            "password is required"
        ],
        minlength:[8,'password length must be 8 or greater.']
    },
    Role: { type:Number, default:0},
}, { timestamps: true });


module.exports.User = mongoose.model('User', UserSchema);
module.exports.UserSchema=UserSchema;

UserSchema.plugin(uniqueValidator)
