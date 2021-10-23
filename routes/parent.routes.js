import Router from "express";

const parentRouter = Router();

parentRouter.get("/", (req, res) => {
  res.send("parent");
});

export default parentRouter;
