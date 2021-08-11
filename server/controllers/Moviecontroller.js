const  {Movie}  = require('../models/movie.model');
const  {Category}  = require('../models/category.model');
module.exports.createMovie = (request, response) => {
    Movie.create(
        request.body
    )
        .then(movie => response.json(movie))
            .catch(err => response.status(400).json(err))
}
module.exports.addCat = async function (req, res, next)
{
    try{
        console.log("anything")
const{cat}=req.body;
const category=await Category.create({Name:cat})

if (!category){
    res.status(404).json({message:"somthing is wrong"})
}
const finalMovie= await Movie.findOneAndUpdate({_id: req.params.id},  {$push: {Category: category}})

console.log(category);
res.json(finalMovie)
}catch{
        return "error";
    }
};
module.exports.getAllMovie = (request, response) => {
    Movie.find({})
        .then(movies => response.json(movies))
        .catch(err => response.json(err))
}
module.exports.getMovie = (request, response) => {
    Movie.findOne({_id:request.params.id})
        .then(movie => response.json(movie))
        .catch(err => response.json(err))
}
module.exports.updateMovie =(request,response) => {
    Movie.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedmovie => response.json(updatedmovie))
    .catch(err => response.json(err))
}
module.exports.deleteMovie = (request, response) => {
    Movie.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

        




