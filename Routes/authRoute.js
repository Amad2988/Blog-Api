const express = require('express')
const {check, validationRuest, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const userModel = require('../Models/userSchema')

const router = express.Router()

router.post('/', [check("email", "Please provide a valid email").isEmail(), check("password", "Check your password").notEmpty()], 
    async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.json(errors.array())
    }

    try{
        const user = await userModel.findOne({email: userData.email})

        if (!user){
            return res.json("User not found")
        }

        const isMatch = await bcrypt.compare(userData.password, user.password)

        if (!isMatch){
            return res.json('Wrong password!')
        }

        res.status(200).json('Success!')

    } catch (error) {
        console.log(error);
        escape.status(500).json('Server error')
    }


})

module.exports = router