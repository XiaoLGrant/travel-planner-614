const Destination = require('../models/Destination')

module.exports = {
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
    updateDestination: async (req, res)=>{
        console.log(req.params.id)
        try{
            await Destination.findOneAndUpdate({_id: req.params.id},{
                destination: req.body.destination,
                notes: req.body.notes
            })
            console.log('Destination udpated')
            res.json('Destination updated')
            res.redirect('/destinations')
        }catch(err){
            console.log(err)
        }
    }
}