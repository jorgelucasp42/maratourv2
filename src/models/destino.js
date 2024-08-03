import mongoose from "mongoose";

const destinoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    localizacao: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    imagem: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
});

const Destino = mongoose.model('Destino', destinoSchema);

export default Destino;
