import Router from "express";

import Parent from "../models/parentsSchema.js";

const parentRouter = Router();

parentRouter.get("/", (req, res) => {
  Parent.find({})
    .then(parents => {
      res.json(parents);
    })
    .catch(err => {
      res.json(err);
    });
});

parentRouter.post("/", (req, res) => {
  const { cpf, name, email, phone1, phone2, address } = req.body;

  const parent = new Parent({
    cpf,
    name,
    email,
    phone1,
    phone2,
    address,
  });

  parent
    .save()
    .then(() => {
      res.send(parent);
    })
    .catch(err => {
      res.send(err);
    });
});

export default parentRouter;
