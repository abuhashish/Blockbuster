const { Session,Category,Movie,Seat } = require('../models/models');

module.exports.createSession = async function (request, response)  {
    try{

        const {sessionTime,sessionHall,Title,Duration,Description,MinAge,cat} = request.body
        let zz =await Category.create({Name:cat})
        let sessionMovie=await Movie.create({Title,Duration,Description,MinAge,Category:zz})
        let zzyy= await Session.create({sessionTime,sessionHall,sessionMovie})
        let id=zzyy._id
 
        
        for(i =0,g=id; i < 80; i++)
        {
            console.log(g)
            let thisSeat= await Seat.create({id:i})
            console.log(thisSeat)
            let zzxxx=await Session.findOneAndUpdate({_id:g},{$push:{sessionSeat: thisSeat}})
        }
        
     
        
        response.json(zzyy)

        
    }catch{
        return "error";
    }
    // Hall.create({
    //     Name,
    //     Slots
    // })
    //     .then(project => response.json(project))
    //         .catch(err => response.status(400).json(err))
    
}
module.exports.getAllSession = (request, response) => {
    Session.find({})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}
module.exports.getSession = (request, response) => {
    Session.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}
module.exports.updateSession =(request,response) => {
    Session.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedproject => response.json(updatedproject))
    .catch(err => response.json(err))
}
module.exports.deleteSession = (request, response) => {
    Session.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}