import express from "express"
//importando controllers
import { get_images } from "../controllers/prod_comands.js";

const router = express.Router()

// rota para pegar imagens
router.get("/images", get_images)

export default router;