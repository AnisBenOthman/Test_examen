import PhdStudent from "../models/phdStudent.js";
import { validationResult } from "express-validator";

//function addOnce
export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    PhdStudent.create({
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
    })
      .then((newphd) => {
        res.status(201).json(newphd._id);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getAll(req, res) {
  PhdStudent.find({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
