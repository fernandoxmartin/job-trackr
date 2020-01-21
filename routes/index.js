const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Job = require("../models/Job");

const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/", forwardAuthenticated, (req, res) => res.render("home"));

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  const userId = req.user.id;

  User.findOne({ _id: userId })
    .populate("jobs")
    .exec((err, users) => {
      const jobs = users.jobs;
      res.render("dashboard", { name: req.user.name, jobs: jobs });
    });
});

module.exports = router;
