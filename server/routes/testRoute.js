import { Router } from "express";
import * as Test from "../controllers/testController.js";

const router = Router();

router.get("/test-controller", Test.fetchData);

export default router;
