import express from "express"
//importando controllers
import { get_produtos,get_ususer } from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar imagens
router.get("/produtos", get_produtos)
router.get("get_user", get_ususer)

export default router;