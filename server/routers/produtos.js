import express from "express"
//importando controllers
import { get_produtos,get_ususer, add_cart, get_cart } from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar produtos
router.get("/produtos", get_produtos)

// rota para pegar usuarios dos produtos
router.get("/get_user/:id", get_ususer)

//rota para adicionar no carrinho
router.post("/insert_product_cart/:id_product/:id_user", add_cart)

//rota para pegar o carrinho do usuário
router.get("/get_cart/:id_user", get_cart)

export default router;