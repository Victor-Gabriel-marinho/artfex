import express from "express"
//importando controllers
import { get_produtos, get_usu} from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar imagens
router.get("/produtos", get_produtos)
router.get("/usu_prods", get_usu)

export default router;