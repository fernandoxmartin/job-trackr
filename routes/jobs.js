const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const User = require("../models/User");

router.post("/", (req, res) => {
  const position = req.body.position;
  const company = req.body.company;
  const location = req.body.location;
  const userId = req.user.id;

  const newJob = new Job({
    position,
    company,
    location,
    user: userId
  });

  newJob
    .save()
    .then(job => {
      User.findByIdAndUpdate(userId, { $push: { jobs: job._id } }).then(() => {
        User.findOne({ _id: userId })
          .populate("jobs")
          .exec((err, users) => {
            const jobs = users.jobs;
            res.render("dashboard", { name: req.user.name, jobs: jobs });
          });
      });
    })
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  const userId = req.user.id;
  Job.findByIdAndDelete(req.params.id).then(job => {
    User.findByIdAndUpdate(userId, {
      $pull: { jobs: job._id }
    }).then(() => {
      User.findOne({ _id: userId })
        .populate("jobs")
        .exec((err, users) => {
          const jobs = users.jobs;
          res.render("dashboard", { name: req.user.name, jobs: jobs });
        });
    });
  });
});

router.put("/:id", (req, res) => {
  const userId = req.user.id;
  const { status } = req.body;

  Job.findByIdAndUpdate(req.params.id, {
    status: status
  }).then(() => {
    User.findOne({ _id: userId })
      .populate("jobs")
      .exec((err, users) => {
        const jobs = users.jobs;
        res.render("dashboard", { name: req.user.name, jobs: jobs });
      });
  });
});

module.exports = router;
