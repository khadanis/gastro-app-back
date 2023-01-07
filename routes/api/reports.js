const express = require('express');
const config = require('config');
const Reports = require('../../models/reports');
const fs = require('fs');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype == 'image/jpeg' || file.mimetype === 'image/png')
    cb(null, true);
  else {
    cb(null, false);
  }
  //accept a file
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});
const router = express.Router();

// @route  GET api/reports
// @desc   get all  reports
// @access PUBLIC

router.get('/', async (req, res) => {
  Reports.find((error, reports) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(reports);
    }
  });
});

// @route  GET api/reports/:id
// @desc   get all  reports
// @access PUBLIC

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  Reports.findById(id, (error, report) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(report);
    }
  });
});

// @route  POST api/reports
// @desc   register new reports
// @access PUBLIC

router.post('/', async (req, res) => {
  const report = new Reports(req.body);
  // Save the report to the database
  report.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(report);
    }
  });
});

module.exports = router;
