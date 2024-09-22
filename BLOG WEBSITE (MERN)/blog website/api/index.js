const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');

app.use(express.json()); // For parsing application/json


// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log("Failed to connect to MongoDB:", err));


const storage = multer.diskStorage({
    destination : (req , file, cb)=>{
        cb(null , "images");
    },
    filename :(req , file, cb)=>{
        cb(null , req.body.name);
    }
});

const upload = multer({ storage : storage});
app.post('/api/upload' , upload.single('file') , (req ,res)=>{
    res.status(200).json('File has been uploaded')
})

app.use('/api/auth' , authRoute)
app.use('/api/users' , userRoute)
app.use('/api/posts' , postRoute)
app.use('/api/categories' , categoryRoute)

let port = 5000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
console.log('best of luck')