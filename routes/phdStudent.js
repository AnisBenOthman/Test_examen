import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { getAll, addOnce } from "../controllers/phdStudent.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(
    multer("image"),
    body("fullname").isLength({ min: 5 }),
    body("phone").isLength({ min: 8, max: 8 }),
    addOnce
  );

export default router;
