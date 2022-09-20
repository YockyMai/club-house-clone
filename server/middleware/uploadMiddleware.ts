import { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import sharp from "sharp";

const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    res.on("finish", () => {
      const filePath = req.file!.path;

      [300, 500, 800].forEach((size) => {
        const dir = path.resolve(__dirname, `/../static/avatars/${size}`);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        sharp(filePath)
          .resize({ width: size, height: size })
          .toFile(`${dir}/${req.file?.filename}`);
      });
      next();
    });
  } catch (error) {
    res.status(500).json({
      message: "Error upload middleware",
    });
  }
};

export default uploadMiddleware;
