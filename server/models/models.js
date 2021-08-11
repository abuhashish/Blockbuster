const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const CategorySchema = new mongoose.Schema({
    Name:{type:String,minlength:[4, 'category must be 4 characters or longer'],required:true},
})
const MovieSchema = new mongoose.Schema({
    Title:{type:String, required:true},
    Duration:{type:String, required:true},
    Description:{type:String,required:true},
    MinAge:{type:Number, required:true},
    Category: CategorySchema 
})

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
const SeatSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    isTaken:
        {type:Boolean,default:false}, 
    User:UserSchema,

})
const SessionSchema = new mongoose.Schema({
    sessionTime:{type:String },
    sessionHall:{type:String},
    sessionMovie:MovieSchema,
    sessionSeat:[SeatSchema]
})




UserSchema.plugin(uniqueValidator)
module.exports.User = mongoose.model('User', UserSchema);
module.exports.Movie = mongoose.model('Movie', MovieSchema);
module.exports.Seat = mongoose.model('Seat', SeatSchema);
module.exports.Session = mongoose.model('Session', SessionSchema);
module.exports.Category = mongoose.model('Category', CategorySchema);
