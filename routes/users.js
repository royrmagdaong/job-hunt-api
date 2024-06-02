const express = require('express')
const router = express.Router()
const User = require('../models/user')

//get all users
router.get('/users', async (req, res) => {
    // console.log('response', res)
    try {
        const users = await User.find({}).exec()
        console.log('Users', users)
        return res.json({data: users})
    } catch (error) {
        return res.json({error: error})
    }
    // return res.json({users: 'test'})
})

//create user
router.post('/register', async (req, res) => {
    // console.log('response', res)
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await new User({
            email,
            password
        })
        
        const newUser = await user.save()
        if(newUser){
            return res.json({data: newUser})
        }else{
            return res.status(500).json({response: false, message:error.message})
        }
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }


    // return res.json({users: 'test'})
})




module.exports = router