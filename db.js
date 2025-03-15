const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

let isConnected = false; // Track the connection status

async function connectDB() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("❌ MONGO_URI is missing in .env");
        }
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
