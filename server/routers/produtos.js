import express from "express"
//importando controllers
import { get_produtos,get_ususer, add_cart, get_cart } from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar imagens
router.get("/produtos", get_produtos)
router.get("/get_user/:id", get_ususer)
router.post("/insert_product_cart/:id_product/:id_user", add_cart)
router.get("/get_cart/:id_user", get_cart)

export default router;