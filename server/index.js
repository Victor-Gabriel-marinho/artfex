import express from "express";
import cors from "cors"
import userRoutes from "./routers/user.js";
import router from "./routers/produtos.js";
import "dotenv/config";


const app = express();

// iniciando cors e usando json
app.use(cors());
app.use(express.json());


//usando rotas
app.use("/user", userRoutes);
app.use("/produtos", router)


//executando na porta 5000
app.listen(5000, () => console.log("Express started at http://127.0.0.1:5000"));