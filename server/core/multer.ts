import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const avatarStorage = multer.diskStorage({
  destination: (_, file, callback) => {
    callback(null, "server/static/avatars/origin");
  },
  filename(req, file, callback) {
    const filename = uuidv4() + ".jpeg";
    callback(null, filename);
  },
});

const avatarUpload = multer({ storage: avatarStorage });

export { avatarUpload };
