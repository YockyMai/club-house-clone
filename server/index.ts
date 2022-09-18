import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./server/.env",
});
import { passport } from "./core/passport";
import { sequelize } from "./core/db";
import cors from "cors";
import { avatarUpload } from "./core/multer";
import path from "path";
import sharp from "sharp";
import * as fs from "fs";

const app = express(); //инициализируем сервер с помощью express!

const PORT = process.env.PORT;

app.use(passport.initialize());
app.use(cors({ origin: "*" }));

app.use(express.static(path.resolve(__dirname, "static")));

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
    const callbackScript = `
      <script>
        window.opener.postMessage(${JSON.stringify(
          req.user
        )}, 'http://localhost:3000');
        window.close()
      </script>
    `;

    res.send(callbackScript);
  }
);

app.post("/upload", avatarUpload.single("avatar"), (req, res, next) => {
  const filePath = req.file!.path;

  console.log(filePath);

  [300, 500, 800].forEach((size) => {
    const dir = path.resolve(__dirname, `static/avatars/${size}`);
    console.log(dir);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    sharp(filePath)
      .resize({ width: size, height: size })
      .toFile(`${dir}/${req.file?.filename}`);
  });

  return res.json(req.file?.filename);
});

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
