import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

import { notFoundError, errorHandler } from "./middlewares/error-handler.js";

import phdStudentRoutes from "./routes/phdStudent.js";
import conferenceRoutes from "./routes/conference.js";
import scientificPaperRoutes from "./routes/scientificPaper.js";

const app = express();
const port = process.env.PORT || 9090;
const databaseName = "examen2cinfo2324sp";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static("public/images"));

app.use("/phd-students", phdStudentRoutes);
app.use("/conferences", conferenceRoutes);
app.use("/scientific-papers", scientificPaperRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
