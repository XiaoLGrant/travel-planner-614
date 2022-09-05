const Destination = require('../models/Destination')

module.exports = {
    getDestinations: async (req,res)=>{
        console.log(req.user)
        try{
            const destinationItems = await Destination.find({userId:req.user.id})
            const itemsLeft = await Destination.countDocuments({userId:req.user.id, visited: false})
            res.render('destinations.ejs', {destinations: destinationItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createDestination: async (req, res)=>{
        try{
            await Destination.create({destination: req.body.destinationItem, visited: false, userId: req.user.id, notes: req.body.notes})
            console.log('Destination has been added!')
            res.redirect('/destinations')
        }catch(err){
            console.log(err)
        }
    },
    markVisited: async (req, res)=>{
        try{
            await Destination.findOneAndUpdate({_id:req.body.destinationIdFromJSFile},{
                visited: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markNotVisited: async (req, res)=>{
        try{
            await Destination.findOneAndUpdate({_id:req.body.destinationIdFromJSFile},{
                visited: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteDestination: async (req, res)=>{
        console.log(req.body.destinationIdFromJSFile)
        try{
            await Destination.findOneAndDelete({_id:req.body.destinationIdFromJSFile})
            console.log('Deleted Destination')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    getDestination: async (req,res)=>{
        console.log(req.params.id)
        try{
            const destinationInfo = await Destination.find({_id: req.params.id})
            console.log(destinationInfo)
            res.render('edit.ejs', {destination: destinationInfo})
        }catch(err){
            console.log(err)
        }
    },
    updateDestination: async (req, res) => {
        console.log(req.params.id)
        try{
            await Destination.findOneAndUpdate({_id: req.params.id},{
                destination: req.body.destinationItem,
                notes: req.body.notes
            })
            console.log('Destination udpated')
            res.redirect('/destinations')
        }catch(err){
            console.log(err)
        }
    }
}