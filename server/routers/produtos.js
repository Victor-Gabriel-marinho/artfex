import express from "express"
//importando controllers
import { get_produtos,get_user, add_cart, get_cart, delet_item } from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar produtos
router.get("/produtos", get_produtos)

// rota para pegar usuarios dos produtos
router.get("/get_user/:id", get_user)

//rota para adicionar no carrinho
router.post("/insert_product_cart/:id_product/:id_user", add_cart)

//rota para pegar o carrinho do usuário
router.get("/get_cart/:id_user", get_cart)

// Rota para deletar item
router.delete("/delete/:user_id/:product_id", delet_item)

export default router;