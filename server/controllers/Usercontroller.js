const { User , Hall ,Time, Seat } = require('../models/models');

module.exports.createUser = (request, response) => {
    const { Username, Email,Password } = request.body;
    User.create({
        Username,
        Email,
        Password,
    })
        .then(project => response.json(project))
            .catch(err => response.status(400).json(err))
}
module.exports.getAllUser = (request, response) => {
    User.find({})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}
module.exports.updateUser =(request,response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedproject => response.json(updatedproject))
    .catch(err => response.json(err))
}
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
// module.exports.addSeat=async function (request, response) => {
//    const myuser = await User.findOne({_id:request.params.user})
//    const myhall=await Hall.findOne({_id:request.params.hall})
//    const mytime=await Time.findOne({_id:request.params.time})
   
//    const {cat}=request.body;
// }