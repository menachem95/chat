import { Router } from "express";

import { createGroup } from "../controlers/groupManagement.js";

const router = Router();

router.post("/create", createGroup);




export default router;