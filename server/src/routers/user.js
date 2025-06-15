import express from "express"

// Importando controllers
import { criar_usuario, deletar_usuario, login_user, logout_user } from "../controllers/user_commands.js"

const router = express.Router()

// Rota para cadastrar um usuário
router.post("/criar", criar_usuario)

// Rota para logar
router.post("/login", login_user)

// Rota para deletar um usuário
router.delete("/deletar", deletar_usuario)

// Rota para dar logout
router.post("/logout",logout_user)

export default router