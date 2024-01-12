import PhdStudent from "../models/phdStudent.js";
import Conference from "../models/conference.js";
import ScientificPaper from "../models/scientificPaper.js";

export async function addOnce(req, res) {
  try {
    let newpaper;
    const findphd = await PhdStudent.findById(req.params.idStudent);
    const findConference = await Conference.findById(req.params.idConference);
    const findScientificpaper = await ScientificPaper.find({
      conferenceId: req.params.idConference,
    });
    if (findConference.nbrPaperMax > findScientificpaper.length) {
      newpaper = await ScientificPaper.create({
        phdStudentId: req.params.idStudent,
        conferenceId: req.params.idConference,
        status: false,
      });
      return res.status(201).json(newpaper);
    } else {
      return res.status(400).json({ err: "la conference est compléete" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export function putPonce(req, res) {
  ScientificPaper.findByIdAndUpdate(req.params.id, { status: true })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getAll(req, res) {
  ScientificPaper.find({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export async function getStat(req, res) {
  try {
    let done = 0;
    let pending = 0;
    let papers;
    papers = await ScientificPaper.find({
      conferenceId: req.params.idConference,
    });
    for (let i = 0; i < papers.length; i++) {
      papers[i].status ? done++ : pending++;
    }
    res.status(200).json({
      Done: done,
      Pending: pending,
      Papers: papers,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
