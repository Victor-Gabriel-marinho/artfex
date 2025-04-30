import express from "express"
import { criar_usuario, deletar_usuario, login_user } from "../controllers/user_commands.js"

// import { criar_usu, pegar_usus } from "../controllers/user_commands"

const router = express.Router()


router.post("/criar", criar_usuario)
router.get("/login", login_user)
router.delete("/deletar", deletar_usuario)

export default router