const Destination = require('../models/Destination')

module.exports = {
    getDestinations: async (req,res)=>{
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
            await Destination.create({
                destination: req.body.destinationItem, 
                visited: false, 
                userId: req.user.id, 
                notes: req.body.notes})
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
            console.log('Mark Visited')
            res.json('Marked Visited')
        }catch(err){
            console.log(err)
        }
    },
    markNotVisited: async (req, res)=>{
        try{
            await Destination.findOneAndUpdate({_id:req.body.destinationIdFromJSFile},{
                visited: false
            })
            console.log('Marked Not Visited')
            res.json('Marked Not Visited')
        }catch(err){
            console.log(err)
        }
    },
    deleteDestination: async (req, res)=>{
      
        try{
            await Destination.remove({_id:req.params.id})
        
            res.redirect(req.get('referer'))
        }catch(err){
            console.log(err)
        }
    },
    getDestination: async (req,res)=>{
        
        try{
            const destinationInfo = await Destination.find({_id: req.params.id})
           
            res.render('edit.ejs', {destination: destinationInfo})
        }catch(err){
            console.log(err)
        }
    },
    updateDestination: async (req, res) => {
        
        try{
            await Destination.findOneAndUpdate({_id: req.params.id},{
                destination: req.body.destinationItem,
                notes: req.body.notes
            })
           
            res.redirect('/destinations')
        }catch(err){
            console.log(err)
        }
    }
}