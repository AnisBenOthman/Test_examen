import express from "express";
import { body } from "express-validator";

import { getAll, addOnce } from "../controllers/conference.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(
    body("name").isLength({ min: 5 }),
    body("description").isLength({ min: 20, max: 1000 }),
    body("nbrPaperMax").isInt(),
    addOnce
  );

export default router;
