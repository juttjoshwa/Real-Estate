import express from "express";
import cookieParser from "cookie-parser";
import DB from "./DataBase/DB.js";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "./Routes/AuthRouter.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);
app.use(cookieParser());
 
app.get("/", (req, res) => {
  res.status(200).send("server is working fine");
});

app.listen(process.env.PORT, () => {
  try {
    console.log(`server is working fine on http://localhost:3000`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
});

app.use("/api", AuthRouter);

DB();
