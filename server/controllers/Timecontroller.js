const { Time } = require('../models/models');

module.exports.createTime = (request, response) => {
    const { Slots, Movie } = request.body;
    Time.create({
        Slots,
        Movie
    })
        .then(project => response.json(project))
            .catch(err => response.status(400).json(err))
}
module.exports.getAllTime = (request, response) => {
    Time.find({})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}
module.exports.getTime = (request, response) => {
    Time.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}
module.exports.updateTime =(request,response) => {
    Time.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedproject => response.json(updatedproject))
    .catch(err => response.json(err))
}
module.exports.deleteTime = (request, response) => {
    Time.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}