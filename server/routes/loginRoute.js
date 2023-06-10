import { Router } from "express";

import { login } from "../controlers/login.js";

const router = Router();

router.post("/", login);

export default router;
