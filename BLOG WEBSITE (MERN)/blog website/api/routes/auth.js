const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')


// register 
router.post('/register' , async(req ,res)=>{
    try{
        // bcrypt code start here
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(req.body.password , salt)
        //  store data
        const newUser = new User({
            username: req.body.username, 
            email: req.body.email,
            password: hashedPass
        });
        const user = await newUser.save(); //save is a method of mongoose 
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }

});
    
// Login
router.post('/login' , async(req ,res)=>{
    try{
        // bcrypt code start here
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json('wrong username');
        
        const validated = await bcrypt.compare(req.body.password , user.password)
        !validated && res.status(400).json('wrong password');
        const{ password , ...others} = user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;