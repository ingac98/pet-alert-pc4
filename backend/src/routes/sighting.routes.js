const express = require('express');
const router = express.Router();

const {
  getSightings,
  createSighting
} = require('../controllers/sighting.controller');

router.get('/', getSightings);
router.post('/', createSighting);

module.exports = router;
