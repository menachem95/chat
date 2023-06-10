import { Router } from "express";

import { login, register } from "../controlers/userManagement.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

export default router;
