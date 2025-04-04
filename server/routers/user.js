import express from "express"
// import { criar_usu, pegar_usus } from "../controllers/user_commands"

const router = express.Router()

router.get("user/pegar")
router.post("/user/criar")

export default router