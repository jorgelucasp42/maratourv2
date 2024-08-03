import mongoose from "mongoose";

async function conectaNaDatabase() {
mongoose.connect("mongodb+srv://Maratour:Maratour@cluster0.trsc3p1.mongodb.net/Maratour?retryWrites=true&w=majority&appName=Cluster0")

return mongoose.connection;


};

export default conectaNaDatabase;