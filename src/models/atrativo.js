import mongoose from "mongoose";

const atrativoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true }, // e.g., "praia", "monumento", "museu", etc.
    descricao: { type: String, required: true },
    dicas: { type: String },
    imagem: { type: String, required: true },
    localizacao: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    destino: { type: mongoose.Schema.Types.ObjectId, ref: 'Destino', required: true },
    slug: { type: String, required: true, unique: true }
});

const Atrativo = mongoose.model('Atrativo', atrativoSchema);

export default Atrativo;
