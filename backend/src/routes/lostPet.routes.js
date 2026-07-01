const express = require('express');
const router = express.Router();

const {
  getLostPets,
  getActivePets,
  createLostPet,
  changeLostPetStatus
} = require('../controllers/lostPet.controller');

router.get('/', getLostPets);
router.get('/active', getActivePets);
router.post('/', createLostPet);
router.patch('/:id/status', changeLostPetStatus);

module.exports = router;
