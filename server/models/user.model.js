const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
        required: [true,"email is requried"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
        },
    Age:{
        type:Number,
    },
    password:{
        type:String, 
        required:[
            true,
            "password is required"
        ],
        minlength:[8,'password length must be 8 or greater.']
    },
    Role: { type:Number, default:0},
}, { timestamps: true });
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

module.exports.User = mongoose.model('User', UserSchema);
module.exports.UserSchema=UserSchema;

UserSchema.plugin(uniqueValidator)