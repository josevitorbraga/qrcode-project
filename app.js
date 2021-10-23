import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const run = async () => {
  await mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("🎲 Database connected..."))
    .catch(err => console.log(err));

  app.listen(3333, () => {
    console.log("🚀 Backend Iniciado na porta 3333");
  });
};

run();
