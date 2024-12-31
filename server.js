const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// imports
const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_DB = process.env.MONGO_DB_URL;

// routes
const homeRouter = require('./routes/homeRouter');

// // MongoDB Connection
// mongoose.connect(MONGO_DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error.message);
//     });

// Middleware
app.use(express.json());

// Root Endpoint
app.use("/", homeRouter);


// Server
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
