import { Response, Request } from "express";

class UploadController {
  async avatarUpload(req: Request, res: Response) {
    try {
      return res.json(req.file?.filename);
    } catch (e) {
      return res.status(500).json({
        message: "Error with file upload",
      });
    }
  }
}

export default new UploadController();
