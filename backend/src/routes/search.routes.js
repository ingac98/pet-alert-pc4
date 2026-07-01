const express = require('express');
const router = express.Router();

const {
  searchByImage
} = require('../controllers/search.controller');

router.post('/image', searchByImage);

module.exports = router;
