const { Hall } = require('../models/models');

module.exports.createHall = (request, response) => {
    const { Name,Seat,Slots } = request.body;
    Hall.create({
        Name,
        Seat,
        Slots
    })
        .then(project => response.json(project))
            .catch(err => response.status(400).json(err))
}
module.exports.getAllHall = (request, response) => {
    Hall.find({})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}
module.exports.getHall = (request, response) => {
    Hall.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}
module.exports.updateHall =(request,response) => {
    Hall.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedproject => response.json(updatedproject))
    .catch(err => response.json(err))
}
module.exports.deleteHall = (request, response) => {
    Hall.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}