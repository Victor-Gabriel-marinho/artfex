import express from "express"
//importando controllers
import { get_produtos } from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar imagens
router.get("/produtos", get_produtos)

export default router;