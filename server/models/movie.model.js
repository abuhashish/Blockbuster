const mongoose = require('mongoose');
const CategorySchema = require('./category.model')
var uniqueValidator = require('mongoose-unique-validator');

const MovieSchema = new mongoose.Schema({
    Title:{type:String, required:true},
    Duration:{type:String, required:true},
    Description:{type:String,required:true},
    MinAge:{type:Number, required:true},
    Category: {type : CategorySchema} 
})





// UserSchema.plugin(uniqueValidator)
module.exports.MovieSchema=MovieSchema;
module.exports.Movie = mongoose.model('Movie', MovieSchema);
