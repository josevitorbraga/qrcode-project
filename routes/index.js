import Router from "express";

import parentRouter from "./parent.routes.js";

const router = Router();

router.use("/parent", parentRouter);

export default router;
