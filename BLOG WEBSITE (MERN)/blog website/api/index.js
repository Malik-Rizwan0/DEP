const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log("Failed to connect to MongoDB:", err));

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
console.log ('best of luck')