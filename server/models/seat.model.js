const mongoose = require('mongoose');
const UserSchema = require('./user.model');


var uniqueValidator = require('mongoose-unique-validator');


const SeatSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    isTaken:
        {type:Boolean,default:false}, 
    User:{type : UserSchema},

})
module.exports.SeatSchema=SeatSchema;
module.exports.Seat = mongoose.model('Seat', SeatSchema);
