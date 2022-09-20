import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./server/.env",
});
import { passport } from "./core/passport";
import { sequelize } from "./core/db";
import cors from "cors";
import path from "path";
import router from "./routes";

const app = express(); //инициализируем сервер с помощью express!

const PORT = process.env.PORT;

app.use(passport.initialize());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));

app.use(router);

app.listen(PORT, async () => {
  try {
    console.log(`Server launched on ${PORT} port`);
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
});
