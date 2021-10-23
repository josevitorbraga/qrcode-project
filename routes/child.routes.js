import Router from "express";

import Child from "../models/childSchema.js";
import Parent from "../models/parentsSchema.js";

const childRouter = Router();

childRouter.post("/:parentId", async (req, res) => {
  const { parentId } = req.params;
  const { name, age } = req.body;

  const child = new Child({ name, age, parent: parentId });

  const parent = await Parent.findById(parentId);
  parent.childrens.push(child);

  child.save();
  parent.save();

  res.send(parent);
});

childRouter.get("/:childId", (req, res) => {
  const { childId } = req.params;
  Child.findById(childId)
    .populate("parent")
    .then(children => {
      res.json(children);
    })
    .catch(err => {
      res.send(err);
    });
});

export default childRouter;
