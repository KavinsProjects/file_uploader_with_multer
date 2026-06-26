import express from "express"
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs"
 import {upload} from "../src/middelwares/uploader.middelwares.js"
// const {upload} = require ("../src/middelwares/uploader.middelwares.js")

const app = express();
const runingPort = process.env.DEV_PORT || 3001;
dotenv.config(
    {
        path : "./.env"
    }
);

//const upload = multer({ dest : "uploads/"})

app.get("/", (req,res)=>{
    res.send("Api Is Working")
});

app.post("/uploads/file",upload.single("image"),(req,res)=>{
    return res.json({
        message : "File Uploaded ",data : req.file
    });
});

app.post("/uploads/files",upload.array("images", 10),(req,res)=>{
        return res.json({
        message : "Files Uploaded ", data : req.files
    });
})

try {
    app.listen(runingPort, ()=>{
        console.log("server is runing on the port: ",runingPort)
    })
} catch (error) {
    console.log("There is error on connecting the the server", error);
}

