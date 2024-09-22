const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// Update
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            // Hash the new password
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            // Update the user in the database
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body }, // Update the fields with new data
                { new: true }       // Return the updated document
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            // Internal server error handling
            res.status(500).json(err);
            return;
        }
    } else {
        // Unauthorized action (user can't update another user's account)
        res.status(401).json('You can update only your account');
        return;
    }
});




// Deleted
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            try {
                // Delet the user in the database
                await Post.deleteMany( {username : user.usernameam} );
                await  User.findByIdAndDelete(req.params.id);
                
                res.status(200).json("User Has Been Deleted....");
            } catch (err) {
                // Internal server error handling
                res.status(500).json(err);
                return;
            }
        } catch (error) {
            res.status(404).json("User Not Found");
        }

    } else {
        // Unauthorized action (user can't update another user's account)
        res.status(401).json('You can delete only your account');
        return;
    }
});


// Get User 

router.get('/:id' , async (req ,res)=>{
    try {
        const user =await User.findById(req.params.id);
        const{ password , email , ...others } = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
