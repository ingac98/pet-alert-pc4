const express = require('express');
const router = express.Router();

const {
  getLostPets,
  createLostPet
} = require('../controllers/lostPet.controller');

router.get('/', getLostPets);
router.post('/', createLostPet);

module.exports = router;
