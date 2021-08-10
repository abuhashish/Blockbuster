const { Movie } = require('../models/models');

module.exports.createMovie = (request, response) => {
    Movie.create(
        request.body
    )
        .then(movie => response.json(movie))
            .catch(err => response.status(400).json(err))
}
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

        




