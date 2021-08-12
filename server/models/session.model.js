const mongoose = require('mongoose');
const MovieSchema = require('./movie.model')
// import SeatSchema from './seat.model'
const SeatSchema = require('./seat.model')
// const SeatSchema = require('./seat.model')

// var uniqueValidator = require('mongoose-unique-validator');


const SessionSchema = new mongoose.Schema({
    sessionTime:{type:String },
    sessionHall:{type:String},
    sessionMovie:{type: MovieSchema},
    sessionSeat:[{type: mongoose.SchemaTypes.ObjectId, ref:'eat'}],
});

// UserSchema.plugin(uniqueValidator)
module.exports.Session = mongoose.model('Session', SessionSchema);
module.exports.SessionSchema=SessionSchema;
