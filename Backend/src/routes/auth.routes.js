import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import {
  validateRegisterUser,
  handleValidationErrors,
} from "../validator/auth.validator.js";

const router = Router();

router.post("/register", validateRegisterUser, handleValidationErrors, register);

export default router;