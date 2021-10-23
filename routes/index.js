import Router from "express";

import parentRouter from "./parent.routes.js";
import childRouter from "./child.routes.js";

const router = Router();

router.use("/api/parent", parentRouter);
router.use("/api/child", childRouter);

export default router;
