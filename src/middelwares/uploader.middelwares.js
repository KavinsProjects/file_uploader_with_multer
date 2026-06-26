import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const newName = `${uuidv4()}${extension}`;
    cb(null, newName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/svg+xml",
    "video/mp4",
    "video/x-matroska",
    "application/pdf",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only jpeg, jpg, png, svg, mp4, mkv, pdf files are allowed"),
      false
    );
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter, // ✅ actually wire it in
  limits: {
    fileSize: MAX_FILE_SIZE_BYTES, // ✅ fileSize, not fieldSize
  },
});