import mongoose from "mongoose";

const atrativoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    descricao: { type: String, required: true },
    dicas: { type: String },
    imagem: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    destino: { type: mongoose.Schema.Types.ObjectId, ref: 'Destino', required: true }
});

const Atrativo = mongoose.model('Atrativo', atrativoSchema);

export default Atrativo;
