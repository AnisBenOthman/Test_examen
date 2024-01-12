import express from "express";

import {
  addOnce,
  putPonce,
  getAll,
  getStat,
} from "../controllers/scientificPaper.js";

const router = express.Router();
router.route("/:id").patch(putPonce);
router.route("/:idStudent/:idConference").post(addOnce);
router.route("/conferences/:idConference").get(getStat);
router.route("/").get(getAll);

export default router;
