import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaNaDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
    return mongoose.connection;
}

export default conectaNaDatabase;
