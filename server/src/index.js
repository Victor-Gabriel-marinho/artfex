import express from "express";
import cors from "cors";
import userRoutes from "./routers/user.js";
import router from "./routers/produtos.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configurações
app.use(cors());
app.use(express.json());

// Rotas
app.use("/user", userRoutes);
app.use("/produtos", router);

app.get('/', (req, res) => res.sendStatus(200));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});