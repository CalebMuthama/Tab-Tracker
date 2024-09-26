import express from "express";
import { registerUser, loginUser } from "../controllers/usersController.js";
import validateCredentials from "../middleware/validatingMiddleware.js";
const router = express.Router();

router.post("/", validateCredentials, registerUser);

router.post("/login", validateCredentials, loginUser);

export default router;
