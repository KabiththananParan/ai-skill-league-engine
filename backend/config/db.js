const mongoose = require('mongoose');

const connectDB =async() =>{
    try{
        //conect to mmongodb
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGODB CONNECTED:${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:",error.message);
        process.exit(1);

    }

};

module.exports = connectDB;
