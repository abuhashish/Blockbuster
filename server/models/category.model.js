const mongoose = require('mongoose');


// var uniqueValidator = require('mongoose-unique-validator');


const CategorySchema = new mongoose.Schema({
    Name:{type:String,minlength:[4, 'category must be 4 characters or longer'],required:true},
})

module.exports.Category = mongoose.model('Category', CategorySchema);
module.exports.CategorySchema=CategorySchema;
