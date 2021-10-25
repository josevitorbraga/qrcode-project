import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

import router from "./routes/index.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());
app.use(router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const run = async () => {
  await mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("🎲 Database connected..."))
    .catch(err => console.log(err));

  app.listen(process.env.SERVER_PORT, () => {
    console.log("🚀 Backend Iniciado na porta 3333");
  });
};

run();
