import express from "express";
// Identificação de encontro das chaves
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY ? "Chave encontrada" : "Chave não encontrada");
// Criação da porta
const app = express();
const PORT = 5000;

app.use(express.json());
// Conectar ao Supabase
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

