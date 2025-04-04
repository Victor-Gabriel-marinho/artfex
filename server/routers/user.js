import express from "express"
import { pegar_dados } from "../controllers/user_commands.js"

// import { criar_usu, pegar_usus } from "../controllers/user_commands"

const router = express.Router()

router.get("/dados", pegar_dados)
router.get("user/pegar")
router.post("/user/criar")

export default router