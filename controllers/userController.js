const mongoose = require('mongoose')
const user = require('../models/userSchema')
const userController ={


    get: async (req,res)=>{
        const users = await user.find()
        res.send(users)
    },


    add:async(req,res)=>{
        await user.create(req.body)
        res.send('added')
        },

    
      edit:async(req,res)=>{
        await user.updateOne({ _id : req.body._id },{name:req.body.newName},{password:req.body.newPassword},{mail:req.body.newMail})
          res.send('person update')
      },



      delete:async(req,res)=>{
        await user.findOneAndRemove({_id :  req.body._id})
          res.send('person delete')
      },
}
module.exports = userController