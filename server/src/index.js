import express from "express";
import cors from "cors";
import userRoutes from "./routers/user.js";
import router from "./routers/produtos.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configurações
app.use(cors({
   origin: [
    'https://seu-frontend.onrender.com',
    'http://localhost:3000'
  ],
  credentials: true
}));
app.use(express.json());

// Rotas
app.use("/user", userRoutes);
app.use("/produtos", router);

app.get('/', (req, res) => res.sendStatus(200));

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});