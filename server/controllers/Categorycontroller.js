const { Category } = require('../models/models');

module.exports.createCategory = (request, response) => {
    const { Name } = request.body;
    Category.create({
        Name
    })
        .then(project => response.json(project))
            .catch(err => response.status(400).json(err))
}
module.exports.getAllCategory = (request, response) => {
    Category.find({})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}
module.exports.getCategory = (request, response) => {
    Category.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}
module.exports.updateCategory =(request,response) => {
    Category.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedproject => response.json(updatedproject))
    .catch(err => response.json(err))
}
module.exports.deleteCategory = (request, response) => {
    Category.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}