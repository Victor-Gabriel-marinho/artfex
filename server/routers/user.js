import express from "express"
import { criar_usuario, deletar_usuario, pegar_dados } from "../controllers/user_commands.js"

// import { criar_usu, pegar_usus } from "../controllers/user_commands"

const router = express.Router()


router.get("/pegar", pegar_dados)
router.post("/criar", criar_usuario)
router.delete("/deletar", deletar_usuario)

export default router