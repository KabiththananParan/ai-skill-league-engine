const express = require('express');
const cors = require('cors')
const connectDB = require("./config/db.js");
const dotenv = require("dotenv")
//load env variables
dotenv.config();

connectDB();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});