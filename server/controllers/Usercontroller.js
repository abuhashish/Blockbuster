const  User   = require('../models/user.model');
const  Seat  = require('../models/seat.model');


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

module.exports.register = (req, res)=>{
    const {Username, Email, Password} = req.body;
    User.findOne({Username},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody: "Error has occured ", msgError: true}})
        if(user)
        res.status(400).json({message :{ msgBody : "Username is already taken" , msgError: true}})
        else{
            const newUser = new User({Username,Email,Password});
            newUser.save(err=>{
                if(err)
                res.status(500).json({message : {msgBody: "Error has occured ", msgError: true}})
                else
                res.status(201).json({message : {msgBody: "Account created", msgError: false}})

            })
        }
    })
}

module.exports.login = (req, res)=>{
    if(req.isAuthenticated()){
        const{_id,Username,Password,Email} = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true , sameSite: true});
        res.status(200).json({isisAuthenticated:true , user: {Username,role}})
    }
}
// module.exports.addSeat=async function (request, response) => {
//    const myuser = await User.findOne({_id:request.params.user})
//    const myhall=await Hall.findOne({_id:request.params.hall})
//    const mytime=await Time.findOne({_id:request.params.time})
//    const {cat}=request.body;
// }