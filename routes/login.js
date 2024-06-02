const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findOne({email}).exec()
        // console.log(user)
        if(user){
            if(password === user.password){
                return res.json({data: user})
            }else{
                return res.status(500).json({message: 'incorrect password'})
            }
        }else{
            return res.status(500).json({message: "user doesn't exist"})
        }
    } catch (error) {
        
    }
})


module.exports = router