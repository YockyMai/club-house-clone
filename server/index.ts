import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./server/.env",
});
import { passport } from "./core/passport";
import { sequelize } from "./core/db";

const app = express(); //инициализируем сервер с помощью express!

const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  // принимает url и функцию
  res.send("Hello"); // send отправляет html броаузеру
});

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
    res.send();
  }
);

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
