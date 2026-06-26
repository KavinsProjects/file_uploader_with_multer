import multer from "multer";
import path from "path";
import {v4 as uuidv4 } from "uuid";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const extention = path.extname(file.originalname); //
    //const newName = `${Date.now()},--${Math.round(Math.random() *1e9 )} ${extention}`;
    const newName = `${uuidv4()} ${extention}`;
    cb(null, newName);
  },
});

//fillter
export const upload = multer({
  storage: storage,
  limits:{
    fieldSize : MAX_FILE_SIZE_BYTES
  },
});

