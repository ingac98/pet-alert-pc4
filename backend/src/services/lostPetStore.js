const lostPets = [];

const saveLostPet = (lostPet) => {
  lostPets.push(lostPet);
  return lostPet;
};

const getAllLostPets = () => {
  return lostPets;
};

const getActiveLostPets = () => {
  return lostPets.filter((pet) => pet.status === 'ACTIVE');
};

const findLostPetById = (id) => {
  return lostPets.find((pet) => pet.id === id);
};

const updateLostPetStatus = (id, status) => {
  const pet = findLostPetById(id);

  if (!pet) {
    return null;
  }

  pet.status = status;
  pet.updatedAt = new Date().toISOString();

  return pet;
};

module.exports = {
  saveLostPet,
  getAllLostPets,
  getActiveLostPets,
  findLostPetById,
  updateLostPetStatus
};
