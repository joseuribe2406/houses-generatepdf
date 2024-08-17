'use strict'

const express = require('express');
const fileGenController = require('../controllers/file-gen-controller');
const router = express.Router();

router.post('/generate-file', fileGenController.generateFile);

module.exports = router;